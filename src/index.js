
//ARRAYS
import * as normalizeArray from './guf/normalize-array';

//NORMALS
import * as faceNormals from './guf/face-normals';
import * as vertexNormals from './guf/vertex-normals';

//ONE NORMAL
import * as calculateNormal from './guf/calculate-normal';

//HELPFUL UTILS
import * as cross from './guf/cross';
import * as normalize from './guf/normalize';
// Data Structure
import * as Edge from "./mda/Core/Edge.js";
import * as HalfEdge from "./mda/Core/HalfEdge.js";
import * as Vertex from "./mda/Core/Vertex.js";
import * as Face from "./mda/Core/Face.js";
import * as Mesh from "./mda/Core/Mesh.js";

// Checks
import * as Integrity from "./mda/Integrity/Integrity.js";
import * as MeshIntegrity from "./mda/Integrity/MeshIntegrity.js";
import * as FaceIntegrity from "./mda/Integrity/FaceIntegrity.js";
import * as EdgeIntegrity from "./mda/Integrity/EdgeIntegrity.js";
import * as HalfEdgeIntegrity from "./mda/Integrity/HalfEdgeIntegrity.js";
import * as VertexIntegrity from "./mda/Integrity/VertexIntegrity.js";

// Queries
import * as HalfEdgePrev from "./mda/Queries/HalfEdgePrev.js";
import * as EdgeVertices from "./mda/Queries/EdgeVertices.js";
import * as FaceHalfEdges from "./mda/Queries/FaceHalfEdges.js";
import * as FaceVertices from "./mda/Queries/FaceVertices.js";
import * as VertexFaces from "./mda/Queries/VertexFaces.js";
import * as VertexHalfEdges from "./mda/Queries/VertexHalfEdges.js";
import * as VertexNeighbors from "./mda/Queries/VertexNeighbors.js";
import * as MeshCentroid from "./mda/Queries/MeshCentroid.js";

// Operators
import * as InsertVertexOperator from "./mda/Operators/InsertVertex.js";
import * as InsertEdgeOperator from "./mda/Operators/InsertEdge.js";
import * as DeleteEdgeOperator from "./mda/Operators/DeleteEdge.js";
import * as LoopOperator from "./mda/Operators/Loop.js";
import * as CatmullClarkOperator from "./mda/Operators/CatmullClark.js";
import * as QuadSubdivideOperator from "./mda/Operators/QuadSubdivide.js";
import * as TriangulateOperator from "./mda/Operators/Triangulate.js";
import * as ExtrudeOperator from './mda/Operators/Extrude.js';
import * as PipeOperator from './mda/Operators/Pipe.js';
import * as DuplicateOperator from './mda/Operators/Duplicate.js';
import * as CombineOperator from './mda/Operators/Combine.js';
import * as ScaleOperator from './mda/Operators/Scale.js';
import * as MoveOperator from './mda/Operators/Move.js';
import * as InvertOperator from './mda/Operators/Invert.js';
import * as WireframeOperator from './mda/Operators/Wireframe.js';
import * as CreateFaceOperator from './mda/Operators/CreateFace.js';

// Generator
import * as ProfileGenerator from "./mda/Generators/Profile.js";
import * as now from "performance-now";
import {vec3} from 'gl-matrix';
import {mat4} from 'gl-matrix';
import {quat} from 'gl-matrix';
import * as scrollWheel from 'scroll-speed';
import * as mousePosition from 'mouse-position';
import * as mouseButton from 'mouse-pressed';
import * as key from 'key-pressed';

module.exports = Camera;

function Camera( canvas, opts ) {
  if ( ! ( this instanceof Camera ) ) {
    return new Camera( canvas, opts )
  }

  //Options
  opts = opts || {};

  //Parent Element
  this.canvas = canvas;

  //Events
  this.mw = scrollWheel( canvas, true );
  this.mb = mouseButton( canvas );
  this.mp = mousePosition( canvas );

  //Camera Reset
  this.lastTime = now();
  this.currentTime = this.lastTime;
  this.deltaTime = 200;

  //Interaction
  this.mouseDown = false;
  this.scratchQuat = quat.create();
  this.rotation = quat.create();

  this.defaultPosition = opts.position !== undefined ? opts.position : vec3.fromValues( 0.0, 0.0, -2.0 );
  this.defaultRotation = opts.rotation !== undefined ? opts.rotation : mat4.create();
  this.position = vec3.clone( this.defaultPosition );
  this.theta = 0.0;
  this.damping = opts.damping || 0.9;
  this.calculateCache = false;

  this.size = vec3.create();
  this.axis = vec3.fromValues( 0.0, 0.0, 0.0 );
  this.t1 = vec3.fromValues( 0.0, 0.0, 0.0 );
  this.pt1 = vec3.fromValues( 0.0, 0.0, 0.0 );

  this.matrix = mat4.create();
  this.rotmat = mat4.create();
  this.cache = mat4.create();

  this.mb.on( "down", ( function() {
    this.mouseDown = true;
    this.resetCheck();
    this.mousePressed();
  } ).bind( this ) );

  this.mp.on( "move", ( function() {
    if( this.mouseDown ) {
      this.mouseDragged();
    }
  } ).bind( this ) );

  this.mb.on( "up", ( function() {
    this.mouseDown = false;
  } ).bind( this ) );

  this.mw.on( "scroll", ( function() {
    this.mouseWheel();
  } ).bind( this ) );

  this.reset();
  this.updateMatrix();
}

Camera.prototype.view = function ( out ) {
  mat4.copy( out, this.matrix );
}

Camera.prototype.update = function() {
  this.updateSize();
  this.updateEasing();
  this.updateMatrix();
}

Camera.prototype.resetCheck = function() {
  this.currentTime = now();
  if( this.currentTime - this.lastTime < this.deltaTime ) {
    this.reset();
  }
  this.lastTime = this.currentTime;
}

Camera.prototype.reset = function()
{
  vec3.copy( this.position, this.defaultPosition );
  quat.identity( this.scratchQuat );
  quat.identity( this.rotation );
  // mat4.identity( this.cache );
  mat4.copy( this.cache, this.defaultRotation );
  mat4.identity( this.rotmat );
}

Camera.prototype.mousePressed = function() {
  if( this.calculateCache ) {
    this.cacheRotation();
  }

  this.theta = 0.0;
  quat.identity( this.scratchQuat );
  this.setArcBallVector( this.mp[ 0 ], this.mp[ 1 ] );
}

Camera.prototype.mouseDragged = function() {
  this.setArcBallVector( this.mp[ 0 ], this.mp[ 1 ] );
  this.updateArcBallRotation();
  this.mp.flush();
}

Camera.prototype.mouseWheel = function() {
  this.position[ 2 ] += this.mw[ 1 ] * 0.01;
  this.mw.flush();
}

Camera.prototype.updateArcBallRotation = function( theta )
{
  vec3.normalize( this.t1, this.t1 );
  vec3.normalize( this.pt1, this.pt1 ); //might not be needed..
  this.theta = theta || -Math.acos( Math.min( 1.0, vec3.dot( this.t1, this.pt1 ) ) );
  vec3.cross( this.axis, this.t1, this.pt1 );
  vec3.normalize( this.axis, this.axis );
  quat.setAxisAngle( this.scratchQuat, this.axis, this.theta );
  quat.multiply( this.rotation, this.rotation, this.scratchQuat );
};

Camera.prototype.setArcBallVector = function( x, y )
{
  vec3.copy( this.pt1, this.t1 );
  this.t1[ 0 ] = 2.0 * ( x / this.size[ 0 ] ) - 1.0;
  this.t1[ 1 ] = 2.0 * ( y / this.size[ 1 ] ) - 1.0;
  this.t1[ 1 ] *= -1.0;

  var r = this.t1[ 0 ] * this.t1[ 0 ] + this.t1[ 1 ] * this.t1[ 1 ];
  if( r > 1.000001 ) {
      vec3.normalize( this.t1, this.t1 );
  } else {
      this.t1[ 2 ] = Math.sqrt( 1.0 - r );
  }
};

Camera.prototype.updateSize = function() {
  var canvas = this.canvas;
  var cws = canvas.style.width;
  var found = cws.search( "px" );
  var fw = parseFloat( cws.substring( 0, found ) );
  var dpri = 1.0 / ( canvas.width / fw );
  var width = dpri * canvas.width;
  var height = dpri * canvas.height;
  vec3.set( this.size, width, height, 0.0 );
}

Camera.prototype.updateEasing = function() {
  if( Math.abs( this.theta ) > 0.0001 && !this.mouseDown ) {
    this.theta *= this.damping;
    this.updateArcBallRotation( this.theta );
    this.calculateCache = true;
  }
  else if( this.calculateCache ) {
    this.cacheRotation();
  }
}

Camera.prototype.updateMatrix = function() {
  mat4.fromTranslation( this.matrix, this.position );
  mat4.fromQuat( this.rotmat, this.rotation );
  mat4.multiply( this.rotmat, this.rotmat, this.cache );
  mat4.multiply( this.matrix, this.matrix, this.rotmat );
}

Camera.prototype.cacheRotation = function() {
  mat4.copy( this.cache, this.rotmat );
  mat4.identity( this.rotmat );
  quat.identity( this.rotation );
  this.calculateCache = false;
}

// Core
import * as Physics from './sps/Core/Physics';
import * as Particle from './sps/Core/Particle';
import * as ParticleSystem from './sps/Core/ParticleSystem';
import * as Spring from './sps/Core/Spring';
import * as Angle from './sps/Core/Angle';
// Solvers
import * as EulerSolver from './sps/Solvers/Euler';
import * as VerletSolver from './sps/Solvers/Verlet';
import * as RungeKuttaSolver from './sps/Solvers/RungeKutta';
// import * as VerletSolver from './sps/Solvers/VerletSolver';

// Behaviors
import * as Behavior from './sps/Behaviors/Behavior';
import * as DamperBehavior from './sps/Behaviors/Damper';
import * as HomingBehavior from './sps/Behaviors/Homing';
import * as VortexBehavior from './sps/Behaviors/Vortex';
import * as AttractorBehavior from './sps/Behaviors/Attractor';
import * as SpringsBehavior from './sps/Behaviors/Springs';
import * as AnglesBehavior from './sps/Behaviors/Angles';
import * as ForceBehavior from './sps/Behaviors/Force';

// import * as ForceBehavior from './sps/Behavior/Force';
// import * as SphericalAttractionBehavior from './sps/Behavior/SphericalAttraction';
// import * as RingAttractionBehavior from './sps/Behavior/RingAttraction';
// import * as DistorterBehavior from './sps/Behavior/Distorter';
// import * as PerlinBehavior from './sps/Behavior/Perlin';
// import * as SwarmBehavior from './sps/Behavior/Swarm';
// import * as ElectroStaticBehavior from './sps/Behavior/ElectroStatic';
// import * as BufferEffectorBehavior from './sps/Behavior/BufferEffector';
// import * as LorentzBehavior from './sps/Behavior/Lorentz';

// import * as FieldEffectorBehavior from './sps/Behavior/FieldEffector';
// import * as FieldEffectBehavior from './sps/Behavior/FieldEffect';
// import * as BoundaryBehavior from './sps/Behavior/Boundary';
// import * as ElectroStaticNeighborBehavior from './sps/Behavior/ElectroStaticNeighbor';
// import * as NearElectroStaticBehavior from './sps/Behavior/NearElectroStatic';
// import * as MeshHomingBehavior from './sps/Behavior/MeshHoming';
// import * as ToroidalBoundaryBehavior from './sps/Behavior/ToroidalBoundary';
// import * as SuperShapeBehavior from './sps/Behavior/SuperShape';
//STLS
import * as stlSerializer from './lgp/stl-serializer';
import * as stlDeserializer from './lgp/stl-deserializer';

//OBJS
import * as objSerializer from './lgp/obj-serializer';
import * as objDeserializer from './lgp/obj-deserializer';

//SVGS
import * as svgSerializer from './lgp/svg-serializer';

//IMAGES
import * as imageWriter from './lgp/image-writer';

//FILE UTILITY
import * as fileReader from './lgp/file-reader';
import * as fileWriter from './lgp/file-writer';
//1D Functions
import * as greaterThanZero from "./cga/greater-than-zero-1d.js";
import * as isEqual from "./cga/is-equal-1d.js";
import * as isZero from "./cga/is-zero-1d.js";

//2D Functions
import * as area2 from "./cga/area2-2d.js";
import * as convexHull2 from "./cga/convex-hull-2d.js";
import * as cross2 from "./cga/cross-2d.js";
import * as expandPolygon2 from "./cga/expand-polygon-2d.js";
import * as inCone2 from "./cga/in-cone-2d.js";
import * as intersection2 from "./cga/intersection-2d.js";
import * as intersects2 from "./cga/intersects-2d.js";
import * as intersectsProper2 from "./cga/intersects-proper-2d.js";
import * as isBetween2 from "./cga/is-between-2d.js";
import * as isColinear2 from "./cga/is-colinear-2d.js";
import * as isDiagonal2 from "./cga/is-diagonal-2d.js";
import * as isDiagonalie2 from "./cga/is-diagonalie-2d.js";
import * as isEqual2 from "./cga/is-equal-2d.js";
import * as isLeft2 from "./cga/is-left-2d.js";
import * as isLeftOn2 from "./cga/is-left-on-2d.js";
import * as triangulatePolygon2 from "./cga/triangulate-polygon-2d.js";

//3D Functions
import * as isColinear3 from "./cga/is-colinear-3d.js";
