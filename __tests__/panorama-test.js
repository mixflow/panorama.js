import panorama, {__testonly__ as api} from '../src/panorama';

const {degreeToRadian, radianToDegree} = api;

const degRad = [
  {deg: 45, rad: Math.PI / 4},
  {deg: 90, rad: Math.PI / 2},
  {deg: 180, rad: Math.PI},
  {deg: 360, rad: 2 * Math.PI},
  {deg: -45, rad: -Math.PI / 4},
];

test('some effect degrees', () => {
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