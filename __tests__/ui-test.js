import {createOrientationSwitchHelper, __testonly__ as api} from "../src/user-interface";
import clazz from "../src/css/panorama.less";

const {createEl} = api;

// helper function to check whether or not the class exists.
const contains = (el, className)=>el.classList.contains(className);


describe("the switch controls device orientation enable or disable", ()=>{
  // helper function to quickly generate the switchHelper
  const createSwitchHelper = ()=>createOrientationSwitchHelper(document.body);

  test("test 'clickAndFilpStatus' fn, switch status back and forth", ()=>{
    const helper = createSwitchHelper();
    const el = helper.create();

    // default false to true
    let status = helper.clickAndFlipStatus();
    expect(status).toBeTruthy();
    expect(contains(el, clazz.disabled)).toBe(false);
    // enabledStatus: true to false
    status = helper.clickAndFlipStatus();
    expect(status).toBe(false);
    expect(contains(el, clazz.disabled)).toBeTruthy();
  });

  test("change enable and disable status", ()=>{
    const helper = createSwitchHelper();
    const el = helper.create();

    helper.updateStatus(false);
    expect(contains(el, clazz.disabled)).toBeTruthy();

    helper.updateStatus(true);
    expect(contains(el, clazz.disabled)).toBe(false);
  });

  test("create switch DOM element, default status is disabled", ()=>{
    const el = createSwitchHelper().create();
    expect(contains(el, clazz.orientationSwitch)).toBeTruthy();
    expect(contains(el, clazz.disabled)).toBeTruthy();
  });
});

describe("the shortcut function to create DOM element", ()=>{
  const c1 = "mydiv", c2 = "myclass";

  test("use array to specify classess", ()=>{
    const el = createEl("div", [c1, c2]);
    expect(contains(el, c1)).toBeTruthy();
    expect(contains(el, c2)).toBeTruthy();
  });

  test("use string to specify classes", ()=>{
    const el = createEl("div", c1 + " " + c2);  // old way classname: "mydiv myclass"
    expect(contains(el, c1)).toBeTruthy();
    expect(contains(el, c2)).toBeTruthy();

    // check whether it treat class names separately.
    expect(!contains(el, c1 + " " + c2)).toBeTruthy();
  });

  test("no class name specified", ()=>{
    const el = createEl("p");
    expect(el.tagName.toLowerCase()).toBe("p");
    expect(el).toBeInstanceOf(HTMLParagraphElement);
  });
});
