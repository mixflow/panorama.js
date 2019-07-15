import panorama, {__testonly__ as api} from '../src/panorama';

const {degreeToRadian, radianToDegree} = api;

const degRad = [
  {deg: 45, rad: Math.PI / 4},
  {deg: 90, rad: Math.PI / 2},
  {deg: 180, rad: Math.PI},
  {deg: 360, rad: 2 * Math.PI},
]

// {deg: 450, rad: Math.PI / 2}, // same as 90
// {deg: -90, rad: Math.PI / 2}, // same as 90
// {deg: -270, rad: Math.PI / 2}, // same as 90
// {deg: 450, rad: Math.PI / 2}, // same as 90
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