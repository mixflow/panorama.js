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
  let el; // the switch DOMElement itself
  let enabledStatus = false;

  /**
   *
   * @param {boolean} enabled
   */
  function create(enabled) {
    if (typeof el === "undefined") { // create if not exists before
      el = createEl("span", clazz.orientationSwitch);
      parent.appendChild(el); // put inside of the container.
    }
    updateStatus(enabled);

    return el;
  }

  function updateStatus (enabled) {
    enabledStatus = enabled;
    if (!enabled) {
      el.classList.add(clazz.disabled);
    } else {
      el.classList.remove(clazz.disabled);
    }
  }

  function clickAndFlipStatus(){
    enabledStatus = !enabledStatus; // flip status
    updateStatus(enabledStatus);
    return enabledStatus;
  }

  return {
    create,
    updateStatus,
    clickAndFlipStatus
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

  /* DEV-START */
  __testonly__,
  /* DEV-END */
};

