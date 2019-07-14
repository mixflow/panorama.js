"use strict";

import m4  from './utils/m4';
import { initShaderProgram, createSphereVertices } from './webgl-helper';

/**
 * Panorama.js. create panorama
 *
 * @param {Object} setting  the setting of panorama.js.
 * @param {string|DOMElement} [setting.container=document.body] To specify which container that the panorama puts in, can be either css selector string(like "#id" ".clazzname" "div#id") or DOMElement(like document.querySelector("#id"), document.getElementById("id") ).
 * @param {string} setting.src the image url of the actual panorama.
 * @param {number} [setting.fov=90] the Field Of View in degrees, the camera view angle scope.
 */
export default function panorama(setting) {
  
  // const CLAZZ = 'panorama'; // css class name. [NOT USED YET]

  setting = handleSetting(setting);

  const {container, url, fov} = setting;

  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  container.appendChild(canvas);

  const gl = canvas.getContext("webgl"); // gl: WebGLRenderingContext

  // not support Webgl
  if (gl === null) {
    // TODO warnig the msg that webgl isn't avaiable.
    throw Error({
      type: "Not support WebGL", 
      msg: "WebGL isn't support. the panorama will not work.",
    });
  }

  gl.enable(gl.CULL_FACE); // only draw the front face which the vertices is drawn clockwise.
  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);


  // Vertex shader program
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoordinate;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoordinate;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoordinate = aTextureCoordinate;
    }
  `;

  // Fragment shader program
  const fsSource = `
    varying highp vec2 vTextureCoordinate;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoordinate);
    }
  `;

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoordinate: gl.getAttribLocation(shaderProgram, 'aTextureCoordinate'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };

  // create one sphere vertices
  let sphereSegements = [32, 16];
  const sphereVertices = createSphereVertices(2, sphereSegements[0], sphereSegements[1]);
  
  const gl_loadTexture = curry(loadTexture, gl); // method, first argument
  const texture = gl_loadTexture(url, ()=>{needToRedraw = true;});

  const buffers = initBuffers(gl);
  function initBuffers(gl) {
    
    // position buffer parts
    const positions = sphereVertices.poistions.flat();

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), 
      gl.STATIC_DRAW);
    
    // texture parts
    const textureCoords = sphereVertices.textureCoordinates.flat();
    
    const textureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);

    // build the element array.
    const indices = sphereVertices.indices.flat();

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), 
      gl.STATIC_DRAW);

    return {
      position: positionBuffer,
      textureCoordinate: textureCoordBuffer,
      indices: indexBuffer,
    };
  }

  let squareRotation = 0.0;
  let targetPosition = latlonToVertex(Math.PI / 2, 0); // camera target position
  console.log(targetPosition);
  function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.

    const fieldOfView = fov * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = m4.perspective(
      fieldOfView,
      aspect,
      zNear,
      zFar);

    // Camera matrix
    const cameraUp = [0, 1, 0];
    let cameraMatrix = m4.lookAt([0, 0, 0], targetPosition, cameraUp);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    let modelViewMatrix = m4.inverse(cameraMatrix); 

    let scale = m4.scaling(-1, 1, 1);
    modelViewMatrix = m4.multiply(modelViewMatrix, scale);

    // Now move the drawing position a bit to where we want to
    // start drawing the square.

    // mat4.translate(modelViewMatrix,     // destination matrix
    //                modelViewMatrix,     // matrix to translate
    //                [-0.0, 0.0, -6.0]);  // amount to translate
    
    // rotate the square
    // mat4.rotate(modelViewMatrix,  // destination matrix
    //           modelViewMatrix,  // matrix to rotate
    //           squareRotation * 0.2,   // amount to rotate in radians
    //           [0, 1, 0]);       // axis to rotate around
            

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute.
    {
      const numComponents = 3;  // pull out 3 (x,y,z) values per iteration
      const type = gl.FLOAT;    // the data in the buffer is 32bit floats
      const normalize = false;  // don't normalize
      const stride = 0;         // how many bytes to get from one set of values to the next
                                // 0 = use type and numComponents above
      const offset = 0;         // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.vertexAttribPointer(
          programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexPosition);
    }

    // tell webgl how to pull out the texture coordinates from buffer
    {
      const numComponents = 2; // every coordinate composed of 2 values
      const type = gl.FLOAT; // the data in the buffer is 32 bit float
      const normalize = false; // don't normalize
      const stride = 0; // how many bytes to get from one set to the next
      const offset = 0; // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoordinate);
      gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoordinate,
         numComponents, type, normalize, stride, offset);
      gl.enableVertexAttribArray(programInfo.attribLocations.textureCoordinate);
    }

    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Tell WebGL to use our program when drawing

    gl.useProgram(programInfo.program);

    // Set the shader uniforms

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);

    /* Specify the texture to map onto the faces. */

    // Tell WebGL we want to affect texture unit 0
    gl.activeTexture(gl.TEXTURE0);

    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

    {
      const vertexCount = sphereVertices.indices.length*3;
      const type = gl.UNSIGNED_SHORT;
      const offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
  } //[end] drawScene function

  // handle user input and control the camera, mouse and touch
  let mouseEventHandlers = userControlHandler(updateCamera, false, 0.02);
  let touchEventHandlers = userControlHandler(updateCamera, true);


  // register mouse drag events
  const mouseEventTypes = ["mousedown", "mousemove", "mouseup"];

  Object.keys(mouseEventHandlers).map((key, idx) => {
    canvas.addEventListener(mouseEventTypes[idx], mouseEventHandlers[key], false);
  });
  
  // register touch drag events
  const touchEventTypes = ["touchstart", "touchmove", "touchend"];

  Object.keys(touchEventHandlers).map((key, idx) => {
    canvas.addEventListener(touchEventTypes[idx], touchEventHandlers[key], false);
  });

  /**
   *  The function to change the camera's target that it looks at, 
   *  Also the callback function that is passed in the drag and move event.
   * 
   * @param {number} deltaX the current latitude which camera targets
   * @param {number} deltaY  the current longitude which camera targets
   */
  function updateCamera(deltaX, deltaY) {
    // TODO deltaX Y to lon lat in radius
    const radius = 2;
    let lon = deltaX;
    let lat = deltaY+ Math.PI / 2;
    
    // let latitude = deltaY ;
    // let longitude = deltaX ;
    // console.table(latitude, longitude);
    // lock latitude range, not pass two poles 
    const maxLat = Math.PI * (1 - 0.1), minLat = Math.PI * (0 + 0.1);
    if (lat > maxLat) {
      lat = maxLat;
    } else if (lat < minLat) {
      lat = minLat;
    }
    targetPosition = latlonToVertex(lat, lon);
    console.table([lon,lat, targetPosition.join(',')], ["longitude", "latitude", "xyz"]);

    needToRedraw = true; // redraw the scene
  }

  /**
   * Check the display size(`canvas.clientWidth` and `canvas.clientHeight`) whether it's changed.
   * Update the canvas render size(`canvas.width` and `canvas.height`) to the current display size.
   * And return `true` when the size is changed, otherwise `false`
   * 
   * @return {boolean} true: need resize; false: no need.
   */
  function resize(){
    const clientWidth = gl.canvas.clientWidth;
    const clientHeight = gl.canvas.clientHeight;

    if (gl.canvas.width !== clientWidth || gl.canvas.height !== clientHeight){
      gl.canvas.width = clientWidth;
      gl.canvas.height = clientHeight;
      return true;
    }
    return false;
  }

  let needToRedraw = true;
  // Draw the scene repeatedly
  function render() {
    if(resize() || needToRedraw){
      // need draw
      needToRedraw = false;
      drawScene(gl, programInfo, buffers);
    }

    requestAnimationFrame(render);
  }

  render(); // init call `render()`

  // drawScene(gl, programInfo, buffers);

  return {container};
} // [end] function panorama

/**
 * Transform the latitude and longitude to the correspond vertex in [x,y,z]. (the target point in the sphere whose radius is 1)
 * 
 * @param {number} latitude the radian of latitude, normally from -PI to PI.
 * @param {number} longitude the radian of logitude, normally from 0 to 2*PI.
 */
function latlonToVertex(latitude, longitude){
  const theta = longitude; 
  const phi = latitude;

  const sinTheta = Math.sin(theta), cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi), costPhi = Math.cos(phi);

  const ux = cosTheta * sinPhi;
  const uy = costPhi;
  const uz = sinTheta * sinPhi;

  return [ux, uy, uz];
}

/**
 * Generate the three event handler for user's input control when is dragging. 
 * `startHandler` is used for the begin of the dragging control, handle `mousedown` event or `touchstart` event.
 * `moveHandler` is used when user is dragging, handle `mousemove` event or `touchmove` event.
 * `endHandler` is used for the end of the dragging control, handle `mouseup` or  `touchend` event.
 * 
 * @param {function} draggingCallback the callback function handle user drag movement when user is dragging. 
 *  passed two arguments current deltaX and deltaY(user movement in pixel) that is used later to compute the camera `look at` (target position).
 * @param {boolean} [isTouch=false] true if user use touch device to drag and move, false otherwise(like mouse).
 * @param {number} [moveSpeed=1] the multiplier of the user movement speed, default it's 1 that is normal speed and no change.
 */
const userControlHandler = (function (){
  
  // the start position of Latitude in degrees. Usually it's from -90 which is north pole to 90  which is south pole.
  // the start position of longitude in degrees. Usually it's from 0 to 360
  let latitude = 0;
  let longitude = 0;
  
  // actually the function
  return function (draggingCallback, isTouch, moveSpeed) {
  
    let startX = 0;
    let startY = 0;
    let isUserDragging = false; // true during user drags 

    // set default value 1 to moveSpeed
    if (typeof moveSpeed === "undefined") {moveSpeed = 1;} 
  
    // get clientX and clientY either from mouse(click) or touch.  
    const getXY = isTouch ? 
      (eventTarget) => ({x: eventTarget.changedTouches[0].clientX, y: eventTarget.changedTouches[0].clientY}) :
      (eventTarget) => ({x: eventTarget.clientX, y: eventTarget.clientY});
  
  
    function startHandler(event){
      event.preventDefault();

      console.log('down event');

      isUserDragging = true;
      
      let {x, y} = getXY(event);
      startX = x;
      startY = y;
    }
  
    function moveHandler(event){
      
      if (isUserDragging === true) {
        let {x, y} = getXY(event);
        let deltaX = x - startX;
        let deltaY = y - startY;
    
        deltaX = deltaX * moveSpeed;
        deltaY = deltaY * moveSpeed;
        
        draggingCallback(deltaX, deltaY);
      }
    }

    function endHandler(event){
      isUserDragging = false; // reset 
    }
  
    return {
      startHandler,
      moveHandler,
      endHandler,
    };
  }; // [end] return actual function
})();

/**
 * 
 * @param {WebGLRenderingContext} gl 
 * @param {string} url image url
 */
function loadTexture(gl, url, successCallback){
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;

  // grey placeholder color before texture loaded // [0,0,255,128]opaque blue
  const pixel = new Uint8Array([0, 0, 0, 128]); 
  const width = 1;
  const height = 1;
  const border = 0;
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);


  // TODO seperate/extract the image part from WebGL texture part.
  const image = new Image();

  image.crossOrigin = "anonymous"; // solve CROS problem
  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    // WebGL1 has different requirements for power of 2 images
    // vs non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
       // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      console.log("mipmap texture");
    } else {
      // No, it's not a power of 2. Turn off mips and set
      // wrapping to clamp to edge
      
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }

    // callback after loaded.
    if (successCallback) {
      successCallback();
    }
  };
  image.src = url;

  return texture;
}

/*
  panorama helper function
 */

function handleSetting(setting){
  setting = setting || {};
  
  const defaultSetting = {
    container: document.body,
    url: undefined,
    
    fov: 90,
    
  };

  // thes option must be contained 
  if (!setting.url || typeof setting.url !== "string") {
    throw Error("Missing `url` in `setting` or The type of `url` isn't correct: the image url must be passed in `setting`, and it should be string.")
  }

  // fill the missing setting with default
  for (let key in defaultSetting) {
    if (!(key in setting)){
      setting[key] = defaultSetting[key];
    }
  }

  // container can be either string or DOMElement
  if (typeof setting.container === "string") {
    setting.container = document.querySelector(setting.container);
  } // else DOMElement

  return setting;
}

/* 
  JS helper function
 */
function isPowerOf2(value){
  return (value & (value - 1)) === 0; // binary bit operation trick 
}

// curry function. let addone = curry(add, 1); let x = addone(3) // x is 4
function curry(method){
  const slice = Array.prototype.slice;
  const startArgs = slice.apply(arguments).slice(1); // exclude the 1st method argument
  return function(){
    const restArgs = slice.apply(arguments);
    return method.apply(null, startArgs.concat(restArgs)); // call actual function
  }
}