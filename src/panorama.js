import {mat4} from './utils/gl-matrix';
import {initShaderProgram, createSphereVertices} from './webgl-helper'

/**
 * 
 * @param {Object} setting  the setting of panorama.js. 
 * @param {string|DOMElement} [setting.container=document.body] To specify which container that the panorama puts in, can be either css selector string(like "#id" ".clazzname" "div#id") or DOMElement(like document.querySelector("#id"), document.getElementById("id") ).
 * @param {string} setting.src the image url of the actual panorama.
 * @param {number} [setting.fov=90] the Field Of View in degrees, the camera view angle scope.
 */
export default function panorama(setting) {

  const CLAZZ = "panorama"; // css class name. [NOT USED YET]

  setting = handleSetting(setting);

  const container = setting.container;

  const canvas = document.createElement("canvas");
  /* set the canvas size that is same as container size.
   Or the render resolution would be not correct. */
  canvas.width = container.clientWidth * setting.canvasResolutionRatio;
  canvas.height = container.clientHeight * setting.canvasResolutionRatio;
  container.appendChild(canvas);

  const gl = canvas.getContext("webgl"); // gl: WebGLRenderingContext

  // not support Webgl
  if (gl === null) {
    // TODO warnig the msg that webgl isn't avaiable.
    return;
  }

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
  let sphereSegements = [32, 16]
  console.log(`the number of sphere segements :${sphereSegements}`)
  const sphereVertices = createSphereVertices(20, sphereSegements[0], sphereSegements[1]);
  
  const gl_loadTexture = curry(loadTexture, gl);
  const texture = gl_loadTexture(setting.url);

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
    }
  }

  let squareRotation = 0.0;
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

    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    // note: glmatrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(projectionMatrix,
                     fieldOfView,
                     aspect,
                     zNear,
                     zFar);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    const modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to
    // start drawing the square.

    // mat4.translate(modelViewMatrix,     // destination matrix
    //                modelViewMatrix,     // matrix to translate
    //                [-0.0, 0.0, -6.0]);  // amount to translate
    
    // rotate the square
    // mat4.rotate(modelViewMatrix,  // destination matrix
    //           modelViewMatrix,  // matrix to rotate
    //           squareRotation,   // amount to rotate in radians
    //           [0, 0, 1]);       // axis to rotate around
    mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              squareRotation * 0.2,   // amount to rotate in radians
              [0, 1, 0]);       // axis to rotate around
            

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
  }

  

  let then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds from millseconds
    const deltaTime = now - then;
    then = now;

    squareRotation += deltaTime;

    drawScene(gl, programInfo, buffers);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // drawScene(gl, programInfo, buffers);

  return {container};
} // [end] function panorama

/**
 * 
 * @param {WebGLRenderingContext} gl 
 * @param {string} url image url
 */
function loadTexture(gl, url){
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
      console.debug('generate mipmaps of texture.');
    } else {
      // No, it's not a power of 2. Turn off mips and set
      
      // wrapping to clamp to edge
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
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
    
    canvasResolutionRatio: 1,
    
    fov: 90,
    
  }

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