import panorama, {__testonly__ as api} from '../src/panorama';

const {defaultSetting, handleSetting, degreeToRadian, radianToDegree} = api;

// the minimum size of entries in setting that the user can pass
const newMinSetting = () => ({url: "fake url"});

test("get DOMelement when user setting's container is string", () => {
  const target = document.createElement("div");
  target.id = "Neo";
  target.classList.add("theOne", "savior");

  document.body.appendChild(target);
  
  const selectors = ["#Neo", ".theOne", ".savior"];
  selectors.map( selector => {
    let setting = newMinSetting();
    setting.container = selector; // set custom container
    // get actual DOMelement by selector string.
    expect(handleSetting(setting).container).toBe(target);
  });
});

test("test default container is DOM body", () => {
  let setting = newMinSetting();
  expect(handleSetting(setting).container).toBe(document.body);
});

test("required url in setting", () => {
  expect(handleSetting).toThrow(/url/); 
  expect(() => handleSetting({url:""})).toThrow(/url/);
});

test('push missing settings with defaults', () => {
  let setting = newMinSetting();
  
  const defaultKeys = Object.keys(defaultSetting).filter( key => !(key in setting));

  const newSetting= handleSetting(setting);
  // check the default value of new setting whether is equal to preset default setting.
  defaultKeys.map( key => expect(defaultSetting[key]).toEqual(newSetting[key]));
});

const degRad = [
  {deg: 45, rad: Math.PI / 4},
  {deg: 90, rad: Math.PI / 2},
  {deg: 180, rad: Math.PI},
  {deg: 360, rad: 2 * Math.PI},
  {deg: -45, rad: -Math.PI / 4},
];

test('same effect degrees', () => {
  const degMappingRad = [
    {deg: 450, rad: Math.PI / 2}, // same as 90
    {deg: -270, rad: Math.PI / 2}, // same as 90
    {deg: -315, rad: Math.PI / 4},
  ];

  degMappingRad.map( ({deg, rad}) => {
    let transRad = degreeToRadian(deg);
    expect(Math.sin(transRad)).toBeCloseTo(Math.sin(rad));
  })

});


test('degrees to radians', () => {
  degRad.map( ( {deg, rad} ) => {
    expect(degreeToRadian(deg)).toBeCloseTo(rad);
  });
});

test('radians to degrees', () => {
  degRad.map( ( {deg, rad} ) => {
    expect(radianToDegree(rad)).toBeCloseTo(deg);
  });
});