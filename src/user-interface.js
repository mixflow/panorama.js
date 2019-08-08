/*
The user interface parts of panorama.js. A bunch of settings of panorama to control by user.
*/

import clazz from "./css/panorama.less";

/**
 *
 * @param {Element} target the target will be in fullscreen mode or exit fullscreen mode(back to normal)
 */
const toggleFullscreen = (function(){
  const prefixs = ["", "webkit", "moz", "ms"];

  // the methods in different broswers with corresponding prefix
  function requestFullscreen(target) {
    for (let i = 0; i < prefixs.length; i+=1){
      const prefix = prefixs[i];
      const methodName = prefix? `${prefix}RequestFullscreen` : "requestFullscreen";

      if(target[methodName]){
        target[methodName](); // call the corresponding method
      }
    }
  }

  function exitFullscreen() {
    for (let i = 0; i < prefixs.length; i+=1){
      const prefix = prefixs[i];
      const methodName = prefix? `${prefix}ExitFullscreen` : "ExitFullscreen";

      if(document[methodName]){
        document[methodName](); // call the corresponding method
      }
    }
  }

  return function (target) {
    if (!document.fullscreenElement) {
      // document.fullscreenElement would be null, if there's no fullscreen element.
      // only one element could be  in full-screen mode.
      requestFullscreen(target);
    } else {
      exitFullscreen();
    }
  };
})();

/**
 * The toggle button on user control pannel of UI. To enter or exit fullscreen.
 *
 * @param {Element} parent the parent DOM element to put the switch in
 */
function createFullscreenSwitchHelper(parent) {
  return switchHelper({
    parent: parent,
    className: clazz.fullscreenSwitch,
    onStateClassName: clazz.inFullscreen
  });
}


// the part that controls the device orientation(ceilphone motion)

/**
 * Create a DOMElement that is used to switch orientation status. Provide
 * the functions that enable and disable the orientation to work together.
 *
 * @param {Element} parent the parent DOMElement contains this switch
 */
function createOrientationSwitchHelper(parent) {
  return switchHelper({
    parent: parent,
    className: clazz.orientationSwitch,
    offStateClassName: clazz.disabled,
  });
}

/**
 * the helper includes functions that maintance a switch conponent:
 * create switch component, create the DOM element and also manage
 * the classname to change when the state is changed(on or off).
 *
 * @param {Object Literal} setting contains the settings of switch
 * @param {Element} setting.parent  the parent container, the switch would be put into it.
 * @param {string|string array} setting.className the switch's css class name. can be either one or multi ones.
 * @param {string|string array} [setting.onStateClassName=undefined] the switch on state class name,
 *  when switch is on, the DOM element would contains this classname. otherwise remove the classname when switch is off
 * @param {string|string array} [setting.offStateClassName=undefined] the opposite side of 'onStateClassName',
 *  when switch is off, contains the classname, otherwise remove this one.
 * @param {string} [setting.tagName="span"] the switch's DOM element tag, default is "span".
 * @return {Object Literal} return a object literal containsthe functions that to create and filp the switch.
 */
function switchHelper({parent, className, onStateClassName, offStateClassName, tagName}) {
  let el;
  let state;

  if(!tagName) {
    tagName = "span";
  }

  /**
   * Create the DOM elemnet of the switch.
   * @param {boolean} state the init state of the switch when is created. false is off true is on
   * @return {Element} the created DOM element.
   */
  function create(state=false) {
    if (typeof el === "undefined") { // create if not exists before
      el = createEl(tagName, className);
      parent.appendChild(el); // put inside of the container.
    }
    updateState(state);

    return el;
  }

  /**
   * change the state.
   * @param {boolean} _state the switch state would be change to
   *  the argument. false is off true is on.
   */
  function updateState(_state) {
    state = _state;
    if (!state) { // off state add off className or remove on className if specified
      if (offStateClassName) {el.classList.add(offStateClassName);}
      if (onStateClassName) {el.classList.remove(onStateClassName);}
    } else { // otherwise on state remove off className or add on className if specified
      if (onStateClassName) {el.classList.add(onStateClassName);}
      if (offStateClassName) {el.classList.remove(offStateClassName);}
    }
  }

  /**
   * flip the switch for continuous "on" or "off"
   * @return {bool} return the current state of switch. false is off true is on.
   */
  function flip(){
    state = !state; // flip state
    updateState(state);
    return state;
  }

  /**
   * @return {Element} get the reference of the switch's DOM element
   */
  function get(){
    return el;
  }

  return {
    create,
    get,
    updateState,
    flip
  };
}

/**
 * A helper function to create a DOM element.
 *
 * @param {string} tagName  the created DOM tag name, e.g "div", "span"
 * @param {string|string array} [classNames=""] the DOM element classes, could be a
 *  string specifies class name that can be single one or multi ones, e.g "my-button", "my-button disabled";
 *  also could be a string or string array contains a butch of class names, e.g ["my-button", "disabled"].
 *
 * @return {Element} the DOM element that is created
 */
function createEl(tagName, classNames="") {
  const el = document.createElement(tagName);

  if(typeof classNames !== "undefined"){
    el.className = Array.isArray(classNames) ?
      classNames.join(" ") : // array to string
      classNames; // string
  }
  return el;
}

/* DEV-START */

// the inside functions only is exported for unit test. the
// distribute js(bundle file) excludes those codes(between DEV-START and DEV-END comments).
const __testonly__ = {createEl};

/* DEV-END */

export {
  createFullscreenSwitchHelper,
  toggleFullscreen,

  createOrientationSwitchHelper,
  switchHelper,
  /* DEV-START */
  __testonly__,
  /* DEV-END */
};

