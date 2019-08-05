import {__testonly__ as api} from "../src/panorama";

const {userCameraDegreeToLatLon, createDeviceOrientationHelper} = api;

describe("device motion(orientation) control the camere", ()=>{
  test(`disable to reset(clear) previous data, not cause
  problems(not exists movement) when enable again later.`, done => {
    let times = 0;
    let cb = (deltaAlpha, deltaBeta) => {
      times += 1;
      if(times === 1) {
        expect(deltaAlpha).toBe(0);
        expect(deltaBeta).toBe(0);
      } else if(times === 2) {
        expect(deltaAlpha).toBe(0);
        expect(deltaBeta).toBe(0);
        done();
      }
    };

    const helper = createDeviceOrientationHelper(cb);
    // any event motion data is fine, because no actual non-zero delta will generate
    helper.handler({alpha: 30, beta: 30}); // triggle callback first time
    helper.setEnabled(false); // disable
    helper.handler({alpha: 50, beta: 100}); // should NOT triggle  callback because disabled
    helper.setEnabled(true); // enable again
    // triggle callback second time. but the deltas should be zeros
    helper.handler({alpha: 300, beta: 187});
  });

  test("disable and the alphaBefore, betaBefore variable should be reset to undefined", ()=>{
    // no callback and should not excute callback;
    const helper = createDeviceOrientationHelper();
    helper.setEnabled(false);
    const {alphaBefore, betaBefore} = helper.getBeforeValue();
    expect(alphaBefore).toBeUndefined();
    expect(betaBefore).toBeUndefined();
  });

  test(`some device motion, the delta(changed value) is the
  difference between two events`, done=>{
    let times = 0; // the callback times that invoke to diff results
    const diffAlpha = 30, diffBeta = 135;

    let cb = (deltaAlpha, deltaBeta) => {
      times += 1;
      if(times === 1) { // first call
        expect(deltaAlpha).toBe(0);
        expect(deltaBeta).toBe(0);
      } else if (times === 2) { // second call
        expect(deltaAlpha).toBe(diffAlpha);
        expect(deltaBeta).toBe(diffBeta);
        done(); // finish
      }
    };

    const helper = createDeviceOrientationHelper(cb);
    let mockEvent1 = {alpha:0, beta:0};
    let mockEvent2 = {alpha: diffAlpha, beta: diffBeta};

    helper.handler(mockEvent1); // mock triggle event first time
    helper.handler(mockEvent2); // mock triggle second time
  });

  test("no device motion, no change", (done)=>{
    let cb = (deltaAlpha, deltaBeta) => {
      expect(deltaAlpha).toBe(0);
      expect(deltaBeta).toBe(0);

      done();
    };
    const helper = createDeviceOrientationHelper(cb);
    let mockEvent = {alpha:0, beta:0};

    helper.handler(mockEvent);
  });
});

describe("camera degree(user input degree) to latitude and longitude", ()=>{

  test("vertical degree 90 is mapping latitude is 0, -90 is mapping PI", ()=>{
    let {latitude} = userCameraDegreeToLatLon([0, 90]);
    expect(latitude).toBe(0);
    // The ( .. ) around the assignment statement is required syntax when
    // using object literal destructuring assignment without a declaration
    ({latitude} = userCameraDegreeToLatLon([0, -90]));
    expect(latitude).toBe(Math.PI);
  });

  test("horizonal degree 180 is PI and 360 is PI * 2", ()=>{

    let {longitude} = userCameraDegreeToLatLon([180, 0]);
    expect(longitude).toBe(Math.PI);
    ({longitude} = userCameraDegreeToLatLon([360, 0]));
    expect(longitude).toBe(Math.PI*2);

  });

  test("cameraDegree[0,0] is mapping lat: PI/2, lon: 0", ()=>{

    const {latitude, longitude} = userCameraDegreeToLatLon([0,0]);
    expect(latitude).toBe(Math.PI / 2);
    expect(longitude).toBe(0);
  });
});
