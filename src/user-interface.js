/*
The user interface parts of panorama.js. A bunch of settings of panorama to control by user.
*/

import clazz from "./css/panorama.less";


function fullscreenHandler(target) {
  // TODO
  return {
    requestFullscreen: undefined,
    exitFullscreen: undefined
  };
}

function createFullscreenButton(container) {
  // TODO
}


// the part that controls the device orientation(ceilphone motion)

/**
 * Create a DOMElement that is used to switch orientation status. Provide
 * the functions that enable and disable the orientation to work together.
 *
 * @param {DOMElement} parent the parent DOMElement contains this switch
 */
function createOrientationSwitchHelper(parent) {
  return switchHelper({
    parent: parent,
    classname: clazz.orientationSwitch,
    offStateClassname: clazz.disabled,
  });
}

/**
 * the helper includes functions that maintance a switch conponent:
 * create switch component, create the DOM element and also manage
 * the classname to change when the state is changed(on or off).
 *
 * @param {Object Literal} setting contains the settings of switch
 * @param {DOMElement} setting.parent  the parent container, the switch would be put into it.
 * @param {string|string array} setting.classname the switch's css class name. can be either one or multi ones.
 * @param {string} [setting.tagName="span"] the switch's DOM element tag, default is "span".
 * @return {Object Literal} return a object literal containsthe functions that to create and filp the switch.
 */
function switchHelper({parent, classname, offStateClassname, tagName}={tagName: "span"}) {
  let el;
  let state;

  /**
   * Create the DOM elemnet of the switch.
   * @param {boolean} state the init state of the switch when is created. false is off true is on
   * @return {DOMElement} the created DOM element.
   */
  function create(state=false) {
    if (typeof el === "undefined") { // create if not exists before
      el = createEl(tagName, classname);
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
    if (!state) { // off state add off classname
      el.classList.add(offStateClassname);
    } else { // otherwise on state remove off classname
      el.classList.remove(offStateClassname);
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
   * @return {DOMElement} get the reference of the switch's DOM element
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
 * @return {DOMElement} the DOM element that is created
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
  createOrientationSwitchHelper,
  switchHelper,
  /* DEV-START */
  __testonly__,
  /* DEV-END */
};

