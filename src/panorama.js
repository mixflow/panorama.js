"use strict";

import m4  from './utils/m4';
import { initShaderProgram, createSphereVertices } from './webgl-helper';

import clazz from "./css/panorama.less";
import {createOrientationSwitchHelper} from "./user-interface";

/**
 * Panorama.js. create panorama
 *
 * @param {Object} setting  the setting of panorama.js.
 * @param {string|DOMElement} [setting.container=document.body] To specify which container that the panorama puts in, can be either css selector string(like "#id" ".clazzname" "div#id") or DOMElement(like document.querySelector("#id"), document.getElementById("id") ).
 * @param {string} setting.src the image url of the actual panorama.
 * @param {number} [setting.fov=90] the Field Of View in degrees, the camera view angle scope.
 * @param {number array} [setting.cameraDegree=[0,0]] two numbers represent the horizonal and vertical degrees of camera,
 *  default is [0,0] which means the default start point of the panorama image.
 *  the first number ranges from 0 to 360 which is horizonal degree which is the direction that camera looks on the horizon.
 *  the second number ranges from -90 to 90 (totally 180 degrees)  which is vertical degrees or the Pitch angle when look up or look down,
 *  positive numbers(0 to 90) are the degrees that looks up, 90 is the north pole(the top);
 *  negative numbers(-90 to 0) are the degrees that looks down, -90 is the south pole(the bottom);
 */
function panorama(setting) {

  // const CLAZZ = 'panorama'; // css class name. [NOT USED YET]

  setting = handleSetting(setting);

  const {container, url, fov, cameraDegree} = setting;
  const {radius, numVerticalSegments, numHorizonalSegements} = setting.sphere;

  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;

  const wrapper = document.createElement("div");
  wrapper.classList.add(clazz.wrapper);

  // user container > wrapper > canvas
  container.appendChild(wrapper);
  wrapper.appendChild(canvas);

  // overlay
  const overlay = document.createElement("div");
  overlay.className = clazz.overlay;
  wrapper.appendChild(overlay);

  const gl = canvas.getContext("webgl"); // gl: WebGLRenderingContext

  // UI controls

  // main panel that holds all control buttons
  const uiControlPanel = document.createElement("div");
  uiControlPanel.className = clazz.uiControlPanel;
  wrapper.appendChild(uiControlPanel);

  // the device orientation switch to enable and disable the orientation to control cameras
  const orientationSwitchHelper = createOrientationSwitchHelper(uiControlPanel);
  const orientationSwitch = orientationSwitchHelper.create(setting.device);
  // init status of the switch
  orientationSwitchHelper.updateStatus(setting.deviceOrientationEnabled);

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
  const sphereVertices = createSphereVertices(radius, numVerticalSegments, numHorizonalSegements);

  // create one progress helper function to control loading info.
  const loadingProgressHelper = loadingProgressFactory(overlay, "loading panorama...");

  const gl_loadTexture = curry(loadTexture, gl); // method, first argument
  const texture = gl_loadTexture(
    url,
    ()=>{ // callback after finishing to load the texture
      loadingProgressHelper.hide(); // hide progress info
      needToRedraw = true;
    },
    loadingProgressHelper.createOrUpdate // callback while loading
  );

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

  /**
   * Carefully! the range of user setting vertical degrees (-90 to 90) is
   * the reversed order of the latitude(0 to Math.PI) that develops need, also with the offset of half of PI.
   * latitude 0 means the north pole(the top) that is the user setting degree 90.
   *
   * Why make user setting and actual data such different?
   * Anwser: easy for use. `[0,0]`as startpoint matches the man's intuition.
   */
  let {latitude, longitude} = userCameraDegreeToLatLon(cameraDegree);
  let targetPosition = latlonToVertex(latitude, longitude); // camera target position

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

    // cameraMatrix = m4.translate(cameraMatrix, 0, 0, -3);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    let modelViewMatrix = m4.inverse(cameraMatrix);

    let scale = m4.scaling(-1, 1, 1);
    modelViewMatrix = m4.multiply(modelViewMatrix, scale);

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

  // lock latitude range, not pass two poles
  const maxLat = Math.PI * (1 - 0.05); // 0.95
  const minLat = Math.PI * (0 + 0.05); // 0.05
  const clampLatitude = curry(clamp, [minLat, maxLat]);

  const {beforeUpdateCamera, updateCamera, finishUpdateCamera} = (function(){
    // store current latitude and longitude during dragging.
    // only update the actual latitude and longitude after finish dragging.
    let lat;
    let lon;

    function beforeUpdateCamera() {
      lat = latitude;
      lon = longitude;
    }

    /**
     *  The function to change the camera's target that it looks at,
     *  Also the callback function that is passed in the drag and move event.
     *
     * @param {number} deltaX the current latitude which camera targets
     * @param {number} deltaY  the current longitude which camera targets
     */
    function updateCamera(deltaX, deltaY) {
      // update the latlon by adding delta value
      // Treat the delta value as the movement on the circumference(very close),
      // and calculate the ratio of the movement over circumference and get the radian
      // delta longitude = deltaX / circumference * (2*Math.PI),
      // becasuse circumference is (2*Math.PI*radius), so the simplify formular is deltaX / radius.
      let deltaLon = deltaX / radius;
      let delatLat = deltaY / radius;

      latitude = delatLat+lat;
      longitude = deltaLon+lon;

      latitude = clampLatitude(latitude);

      // compute the lookAt vertice.
      targetPosition = latlonToVertex(latitude, longitude);

      needToRedraw = true; // redraw the scene
    }

    function finishUpdateCamera() {
      // update the actual varible latitude and longitude until dragging is done.
      // latitude = lat;
      // longitude = lon;
    }

    return {beforeUpdateCamera, updateCamera, finishUpdateCamera};
  })();

  // handle user input and control the camera, mouse and touch
  let mouseEventHandlers = userControlHandler(beforeUpdateCamera, updateCamera, finishUpdateCamera, false);
  let touchEventHandlers = userControlHandler(beforeUpdateCamera, updateCamera, finishUpdateCamera, true);


  // register mouse drag events
  const mouseEventTypes = ["mousedown", "mousemove", "mouseup"];

  Object.keys(mouseEventHandlers).map((key, idx) => {
    wrapper.addEventListener(mouseEventTypes[idx], mouseEventHandlers[key], false);
  });

  // register touch drag events
  const touchEventTypes = ["touchstart", "touchmove", "touchend"];

  Object.keys(touchEventHandlers).map((key, idx) => {
    wrapper.addEventListener(touchEventTypes[idx], touchEventHandlers[key], false);
  });



  const deviceOrientationHelper = createDeviceOrientationHelper((deltaAlpha, deltaBeta) => {
    // delta values are calculated in degrees. convert those to latlon radians and use directly
    const deltaLon = degreeToRadian(deltaAlpha);
    const deltaLat = degreeToRadian(deltaBeta);

    latitude -= deltaLat;
    longitude -= deltaLon;

    // clamp latitude bewteen south and north poles.
    latitude = clampLatitude(latitude);

    targetPosition = latlonToVertex(latitude, longitude);
    needToRedraw = true;

  });
  // reigster device orientation event to window.
  window.addEventListener("deviceorientation", deviceOrientationHelper.handler, true);
  // bind click event on switch
  orientationSwitch.addEventListener("click", function(event) {
    const enabled = orientationSwitchHelper.clickAndFlipStatus(); // update switch status
    deviceOrientationHelper.setEnabled(enabled);
  }, false);
  // init status
  deviceOrientationHelper.setEnabled(setting.deviceOrientationEnabled);


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
 * Convert user input camere degree to actual longitude and latitude that
 * are used for camera lookAt poisition matrix.
 * Because latlon are in radians. For easy use, the user input is in degree.
 * Also the latitude ranges from 0 to PI that are like North Pole and South Pole on the Earth,
 * Correspond to latitude, the user input vertical degree ranges from 90 to -90 that
 * is reversed order of latitude and is offset half of PI.
 *
 * @param {Number Array} degree  two number array contains the horizonal degree and
 *  the vertical degree.
 */
function userCameraDegreeToLatLon(degree){
  let latitude =  -degreeToRadian(degree[1]) + (Math.PI / 2);
  let longitude =  degreeToRadian(degree[0]); // trans to radian directly
  return {latitude: latitude, longitude: longitude};
}

// compute the radian of the degree. 90deg -> PI/2; 180deg -> PI; 45deg-> PI/4;
const degreeToRadian = (deg) => (deg / 180 * Math.PI);
const radianToDegree = (radian) => (radian / Math.PI * 180);

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

const createDeviceOrientationHelper = function (callback) {
  let enabled = true;

  let alphaBefore, betaBefore;
  function deviceOrientationHandler(event) {
    if (enabled) { // record motion(orientation) data
      const {alpha, beta} = event; // current orientation data

      if (typeof alphaBefore === "undefined") {
        // no data recorded before, set previous value directly.
        alphaBefore = alpha;
        betaBefore = beta;
      }

      // calculate the delta, then invoke callback
      const deltaAlpha = alpha - alphaBefore;
      const deltaBeta = beta - betaBefore;
      // record data
      alphaBefore = alpha;
      betaBefore = beta;

      // invoke callback
      callback(deltaAlpha, deltaBeta);

    } else { // disable orientation
      alphaBefore = undefined;
      betaBefore = undefined;
    }
  }

  function setEnabled(bool) {
    enabled = bool;
  }

  return {
    handler: deviceOrientationHandler,
    setEnabled
    /* DEV-START */
    // only for unit test. those are private variable, should be exposed.
    ,getBeforeValue: () => ({alphaBefore,betaBefore})
    /* DEV-END */
  };
};

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
const userControlHandler = function (startDragCallback, draggingCallback, endDragCallback, isTouch, moveSpeed) {

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

    isUserDragging = true;

    let {x, y} = getXY(event);
    startX = x;
    startY = y;

    startDragCallback();
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

    endDragCallback();
  }

  return {
    startHandler,
    moveHandler,
    endHandler,
  };
}; // [end] return actual function


const loadingProgressFactory = function(parent, text=""){
  let progressWrapper = undefined; // store DOMElement later
  let progressBar = undefined;
  let message = undefined;
  let percentageNumEl = undefined;

  // the actual function
  function createOrUpdate(loaded, total) {
    if (typeof progressWrapper === "undefined") {
      // create DOMELement of the progress bar
      progressWrapper = document.createElement("div");
      progressWrapper.className = clazz.progressWrapper;

      progressBar = document.createElement("div");
      progressWrapper.appendChild(progressBar);
      progressBar.className = clazz.progressBar;

      progressWrapper.appendChild(progressBar);
      parent.appendChild(progressWrapper);
    }

    if(text && typeof message === "undefined"){
      createMessage();
    }

    // update progress bar.
    const ratio = (loaded / total).toPrecision(4);
    if (!Number.isNaN(ratio)) {
      // actually have percentage number
      const percentageNum = `${ratio * 100}%`;
      progressBar.style.width = percentageNum;

      // show percentage number text
      createOrUpdatePercentageNumber(percentageNum);
    }
  }

  function createOrUpdatePercentageNumber(percentageNum) {
    if (typeof percentageNumEl === "undefined") {
      // if not exists, create
      percentageNumEl = document.createElement("div");
      percentageNumEl.className = clazz.percentageNum;

      progressWrapper.appendChild(percentageNumEl);
    }
    percentageNumEl.innerText = percentageNum;
  }

  function createMessage() {
    message = document.createElement("div");
    message.className = clazz.progressMessage;
    message.innerText = text;

    progressWrapper.appendChild(message);
  }

  function hide(){
    progressWrapper.style.display = "none";
  }

  function show(){
    progressWrapper.style.display = "block";
  }

  return {createOrUpdate, hide, show};
};

/**
 *
 * @param {WebGLRenderingContext} gl The context of webgl
 * @param {string} url image url that is used as texture
 * @param {function} textureLoadedCallback Optional, the function is called with loaded texture argument
 *  when texture is already loaded. Usually contains the method that redraw webgl scene to show the texture.
 * @return {WebGLTexture} the webgl texture. Be careful, the texture is loaded asynchronously(load image asynchronously),
 *  it would be placeholder(single color) at the beginning. So use the callback function to handle the loaded texture.
 */
function loadTexture(gl, url, textureLoadedCallback, loadingCallback){
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

  /**
   * The callback function would be called when complete loading image.
   * Set the panorama image as the texture.
   * @param {HTMLImageElement} image  the image element that is used as texture
   */
  function bindImageTextureCallback (image) {

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    // WebGL1 has different requirements for power of 2 images
    // vs non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // No, it's not a power of 2. Turn off mips and set
      // wrapping to clamp to edge
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }

    // callback after image loaded.
    if (textureLoadedCallback) {textureLoadedCallback(texture);}

  } // [end] bindImageTextureCallback

  const image = document.createElement("img");
  loadImage({url:url, image: image, loadedCallback: bindImageTextureCallback, loadingCallback: loadingCallback});

  return texture;
}

function loadImage({url, image = new Image(), loadedCallback, loadingCallback}) {

  const onProgressHandler = loadingCallback ?
    (event) => loadingCallback(event.loaded, event.total) :
    undefined;

  // [Important] image.src is asynchronous operation, set onload to handle after the image is loaded
  image.onload = function() {
    if (loadedCallback) {loadedCallback(image);}
  };

  progressFetchBlob(url, {method: "get"}, onProgressHandler)
  .then(responseBlob => {
    const objectUrl = URL.createObjectURL(responseBlob);
    image.src = objectUrl;
  })
  .catch( err => {throw err;});
}

function progressFetchBlob(url, opts={}, onProgressHandler) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.responseType = "blob";
    xhr.open(opts.method || "get", url);

    if (opts.headers) {
      Object.keys(opts.headers).map( key => xhr.setRequestHeader(key, opts.headers[key]) );
    }
    if (onProgressHandler) {
      xhr.onprogress = onProgressHandler; // passed event
    }
    xhr.onload = (event) => resolve(event.target.response);
    xhr.onerror = reject;

    xhr.send(opts.body);
  });
}

/*
  panorama helper function
 */

const defaultSetting = {
  // the DOMelement(or the CSS seletor string that refers the DOMElement) container that contains this panorama.js component
  container: document.body,
  // the image url of the panorama
  url: undefined,

  // the field of view
  fov: 75,
  // the inital degree of the camerea view, default is [0,0] which means to look front on the horizon
  cameraDegree: [0, 0],

  sphere: {
    radius: 30,
    numVerticalSegments: 16, // the number of the vertical segments. Like Earth's meridians,the line going pole to pole.
    numHorizonalSegements: 8 // the number of the horizonal segments. Like Earth's parallels.
  },

  // whether or not to use the device's orientation(ceilphone oritation) to control the camera.
  // Be careful! Newer browsers may need the deviceorientation must be used in HTTPS.
  deviceOrientationEnabled: true,
};

/**
 * Fill the setting with default ones, except the exclude ones match the `excludeKeys`.
 *
 * @param {Object} setting  The object literal that is target setting, whose missing entries will be filled with default ones.
 * @param {Object} defaultSetting  The object literal  contains default setting entries
 * @param {Set} [excludeKeys=Set(0)] Will NOT copy the entry that is in the exclude keys, default is empty set that there is no exclude keys
 */
function copyMissingValues(setting, defaultSetting, excludeKeys=new Set()) {
  // fill the missing entry with default
  for (let key in defaultSetting) {
    if (!excludeKeys.has(key) && !(key in setting)){
      setting[key] = defaultSetting[key];
    }
  }
}

function handleSetting(setting){
  setting = setting || {};
  const objectSettingKeys = ["sphere"]; // the setting entry value is object.

  // thes option must be contained
  if (!setting.url || typeof setting.url !== "string") {
    throw Error("Missing `url` in `setting` or The type of `url` isn't correct: the image url must be passed in `setting`, and it should be string.");
  }

  copyMissingValues(setting, defaultSetting);
  objectSettingKeys.map( key => copyMissingValues(setting[key], defaultSetting[key]) );

  // container can be either string or DOMElement
  if (typeof setting.container === "string") {
    setting.container = document.querySelector(setting.container);
  } // else DOMElement

  return setting;
}

/*
  JS helper function
*/

/**
 * Clamp the value between min and max inclusively.
 * @param {Number Array} range the Array contains min and max.
 * @param {Number} x the target value will be clamped.
 * @return {Number} the clamped result number.
 */
function clamp(range, x){
  if(!range || range.length < 2){
    throw Error(`Value Error: The 'range' argument: '${range}',
      which is passed in 'clamp' function isn't a array of two numbers.
      It must contain min and max value. `);
  }
  const min = range[0], max = range[1];
  if (x < min) {
    x = min;
  }else if (x > max) {
    x = max;
  }
  return x;
}

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
  };
}

/* DEV-START */
const __testonly__ = {clamp,
  createDeviceOrientationHelper, userCameraDegreeToLatLon, loadImage,
  progressFetchBlob, defaultSetting, handleSetting, degreeToRadian, radianToDegree, curry};
export {__testonly__};
/* DEV-END */

export default panorama;
