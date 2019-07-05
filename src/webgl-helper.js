/**
 * Primitive sphere, the vertices in the list of 
 * coordinates that is represented by the array contains 3 numbers (x,y,z).
 * 
 * @param {number} radius 
 * @param {number} numVerticalSegments the number of the vertical segments. Like Earth's meridians,the line going pole to pole.
 * @param {number} numHorizonalSegements the number of the horizonal segments. Like Earth's parallels.
 * @param {number} [startLatitudeInRadians=0]  
 * @param {number} [endLatitudeInRadians=Math.PI]  
 * @param {number} [startLongitudeInRadians=0]  
 * @param {number} [endLongitudeInRadians=2*Math.PI]  
 */
export function createSphereVertices(
  radius, numVerticalSegments, numHorizonalSegements, 
  startLatitudeInRadians = 0, endLatitudeInRadians = Math.PI, 
  startLongitudeInRadians = 0, endLongitudeInRadians = 2 * Math.PI) {

  const latitudeRange = endLatitudeInRadians - startLatitudeInRadians;
  const longitudeRange = endLongitudeInRadians - startLongitudeInRadians;
  
  // add one because the end line should be two lines merged
  const numVertices = (numVerticalSegments + 1) * (numHorizonalSegements + 1); 
  
  let positions = [], normals = [], texCoords = [];

  for (let j = 0; j < numHorizonalSegements+1; j+=1) {
    for (let i = 0; i < numVerticalSegments+1; i+=1) {
      const u = i / numVerticalSegments;
      const v = j / numHorizonalSegements;

      const theta = longitudeRange * u; 
      const phi = latitudeRange * v;

      const sinTheta = Math.sin(theta), cosTheta = Math.cos(theta);
      const sinPhi = Math.sin(phi), costPhi = Math.cos(phi);

      const ux = cosTheta * sinPhi;
      const uy = costPhi;
      const uz = sinTheta * sinPhi;

      positions.push([radius * ux, radius * uy, radius * uz]);
      normals.push([ux, uy, uz]);
      texCoords.push([1 - u, v]);
    }
  }

  // generate the indices of the triangles.
  const numVerticalSegmentVertices = numVerticalSegments + 1;
  let indices = [];
  for (let i = 0; i < numVerticalSegments; i += 1) {
    for (let j = 0; j < numHorizonalSegements; j += 1){
      // two triangles of one face
      /* triangle 1 
          *2-----*1
            \    |
              \  |
                *3  
      */
      let idx1 = [
        j * numVerticalSegmentVertices + (i + 1),
        j * numVerticalSegmentVertices + i,
        (j + 1) * numVerticalSegmentVertices + i
      ]
      /* triangle 2
           *1   
           |  \
           |    \
          *2-----*3
      */
      let idx2 = [
        j * numVerticalSegmentVertices + (i + 1),
        (j + 1) * numVerticalSegmentVertices + i ,
        (j + 1) * numVerticalSegmentVertices + (i + 1)
      ]

      indices.push(idx1, idx2);
    }
  }

  return {
    poistions: positions,
    normals: normals,
    textureCoordinates: texCoords,
    indices: indices,

    numVertices: numVertices
  }

}

/*
  GLSL shader program and GLSL code compiler.

  There are two shader: vertex shader and fragment shader.
  Vertex shader is used for the vertex position info.
  fragment shader is used for the vertex color info.

  For more details, Look for the document about WebGL on MDN.
 */


//
// Initialize a shader program, so WebGL knows how to draw our data
//
export function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}