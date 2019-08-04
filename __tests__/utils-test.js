const {__testonly__} = require("../src/panorama");

const {clamp} = __testonly__;

describe("clamp target number between min and max inclusively:", ()=>{

  test("the range parameter shouldn't accept empty or a array whose length is less than 2", ()=>{
    expect(()=>clamp(undefined, 1)).toThrow(/clamp/i);
    expect(()=>clamp([], 1)).toThrow(/clamp/i);
    expect(()=>clamp([1], 1)).toThrow(/clamp/i);
  });

  test("the number is larger than max, clamped number is max", ()=>{
    const num = Math.PI;
    expect(clamp([0, Math.PI * 0.75], num)).toBe(Math.PI * 0.75);
  });

  test("the number is less than min, clamped number is min", ()=>{
    const num = -2.2;
    expect(clamp([-2, 2], num)).toBe(-2);
  });

  test("the number between min and max, clamp it and result is same", ()=>{
    const num = 1.4;
    expect(clamp([1, 2], num)).toBe(num);
  });
});
