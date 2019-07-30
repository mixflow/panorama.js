import {__testonly__ as api} from "../src/panorama";

const {userCameraDegreeToLatLon} = api;

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
