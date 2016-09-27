(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './guf/normalize-array', './guf/face-normals', './guf/vertex-normals', './guf/calculate-normal', './guf/cross', './guf/normalize', './mda/Core/Edge.js', './mda/Core/HalfEdge.js', './mda/Core/Vertex.js', './mda/Core/Face.js', './mda/Core/Mesh.js', './mda/Integrity/Integrity.js', './mda/Integrity/MeshIntegrity.js', './mda/Integrity/FaceIntegrity.js', './mda/Integrity/EdgeIntegrity.js', './mda/Integrity/HalfEdgeIntegrity.js', './mda/Integrity/VertexIntegrity.js', './mda/Queries/HalfEdgePrev.js', './mda/Queries/EdgeVertices.js', './mda/Queries/FaceHalfEdges.js', './mda/Queries/FaceVertices.js', './mda/Queries/VertexFaces.js', './mda/Queries/VertexHalfEdges.js', './mda/Queries/VertexNeighbors.js', './mda/Queries/MeshCentroid.js', './mda/Operators/InsertVertex.js', './mda/Operators/InsertEdge.js', './mda/Operators/DeleteEdge.js', './mda/Operators/Loop.js', './mda/Operators/CatmullClark.js', './mda/Operators/QuadSubdivide.js', './mda/Operators/Triangulate.js', './mda/Operators/Extrude.js', './mda/Operators/Pipe.js', './mda/Operators/Duplicate.js', './mda/Operators/Combine.js', './mda/Operators/Scale.js', './mda/Operators/Move.js', './mda/Operators/Invert.js', './mda/Operators/Wireframe.js', './mda/Operators/CreateFace.js', './mda/Generators/Profile.js', 'performance-now', 'gl-matrix', 'scroll-speed', 'mouse-position', 'mouse-pressed', 'key-pressed', './sps/Core/Physics', './sps/Core/Particle', './sps/Core/ParticleSystem', './sps/Core/Spring', './sps/Core/Angle', './sps/Solvers/Euler', './sps/Solvers/Verlet', './sps/Solvers/RungeKutta', './sps/Behaviors/Behavior', './sps/Behaviors/Damper', './sps/Behaviors/Homing', './sps/Behaviors/Vortex', './sps/Behaviors/Attractor', './sps/Behaviors/Springs', './sps/Behaviors/Angles', './sps/Behaviors/Force', './lgp/stl-serializer', './lgp/stl-deserializer', './lgp/obj-serializer', './lgp/obj-deserializer', './lgp/svg-serializer', './lgp/image-writer', './lgp/file-reader', './lgp/file-writer', './cga/greater-than-zero-1d.js', './cga/is-equal-1d.js', './cga/is-zero-1d.js', './cga/area2-2d.js', './cga/convex-hull-2d.js', './cga/cross-2d.js', './cga/expand-polygon-2d.js', './cga/in-cone-2d.js', './cga/intersection-2d.js', './cga/intersects-2d.js', './cga/intersects-proper-2d.js', './cga/is-between-2d.js', './cga/is-colinear-2d.js', './cga/is-diagonal-2d.js', './cga/is-diagonalie-2d.js', './cga/is-equal-2d.js', './cga/is-left-2d.js', './cga/is-left-on-2d.js', './cga/triangulate-polygon-2d.js', './cga/is-colinear-3d.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./guf/normalize-array'), require('./guf/face-normals'), require('./guf/vertex-normals'), require('./guf/calculate-normal'), require('./guf/cross'), require('./guf/normalize'), require('./mda/Core/Edge.js'), require('./mda/Core/HalfEdge.js'), require('./mda/Core/Vertex.js'), require('./mda/Core/Face.js'), require('./mda/Core/Mesh.js'), require('./mda/Integrity/Integrity.js'), require('./mda/Integrity/MeshIntegrity.js'), require('./mda/Integrity/FaceIntegrity.js'), require('./mda/Integrity/EdgeIntegrity.js'), require('./mda/Integrity/HalfEdgeIntegrity.js'), require('./mda/Integrity/VertexIntegrity.js'), require('./mda/Queries/HalfEdgePrev.js'), require('./mda/Queries/EdgeVertices.js'), require('./mda/Queries/FaceHalfEdges.js'), require('./mda/Queries/FaceVertices.js'), require('./mda/Queries/VertexFaces.js'), require('./mda/Queries/VertexHalfEdges.js'), require('./mda/Queries/VertexNeighbors.js'), require('./mda/Queries/MeshCentroid.js'), require('./mda/Operators/InsertVertex.js'), require('./mda/Operators/InsertEdge.js'), require('./mda/Operators/DeleteEdge.js'), require('./mda/Operators/Loop.js'), require('./mda/Operators/CatmullClark.js'), require('./mda/Operators/QuadSubdivide.js'), require('./mda/Operators/Triangulate.js'), require('./mda/Operators/Extrude.js'), require('./mda/Operators/Pipe.js'), require('./mda/Operators/Duplicate.js'), require('./mda/Operators/Combine.js'), require('./mda/Operators/Scale.js'), require('./mda/Operators/Move.js'), require('./mda/Operators/Invert.js'), require('./mda/Operators/Wireframe.js'), require('./mda/Operators/CreateFace.js'), require('./mda/Generators/Profile.js'), require('performance-now'), require('gl-matrix'), require('scroll-speed'), require('mouse-position'), require('mouse-pressed'), require('key-pressed'), require('./sps/Core/Physics'), require('./sps/Core/Particle'), require('./sps/Core/ParticleSystem'), require('./sps/Core/Spring'), require('./sps/Core/Angle'), require('./sps/Solvers/Euler'), require('./sps/Solvers/Verlet'), require('./sps/Solvers/RungeKutta'), require('./sps/Behaviors/Behavior'), require('./sps/Behaviors/Damper'), require('./sps/Behaviors/Homing'), require('./sps/Behaviors/Vortex'), require('./sps/Behaviors/Attractor'), require('./sps/Behaviors/Springs'), require('./sps/Behaviors/Angles'), require('./sps/Behaviors/Force'), require('./lgp/stl-serializer'), require('./lgp/stl-deserializer'), require('./lgp/obj-serializer'), require('./lgp/obj-deserializer'), require('./lgp/svg-serializer'), require('./lgp/image-writer'), require('./lgp/file-reader'), require('./lgp/file-writer'), require('./cga/greater-than-zero-1d.js'), require('./cga/is-equal-1d.js'), require('./cga/is-zero-1d.js'), require('./cga/area2-2d.js'), require('./cga/convex-hull-2d.js'), require('./cga/cross-2d.js'), require('./cga/expand-polygon-2d.js'), require('./cga/in-cone-2d.js'), require('./cga/intersection-2d.js'), require('./cga/intersects-2d.js'), require('./cga/intersects-proper-2d.js'), require('./cga/is-between-2d.js'), require('./cga/is-colinear-2d.js'), require('./cga/is-diagonal-2d.js'), require('./cga/is-diagonalie-2d.js'), require('./cga/is-equal-2d.js'), require('./cga/is-left-2d.js'), require('./cga/is-left-on-2d.js'), require('./cga/triangulate-polygon-2d.js'), require('./cga/is-colinear-3d.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.normalizeArray, global.faceNormals, global.vertexNormals, global.calculateNormal, global.cross, global.normalize, global.Edge, global.HalfEdge, global.Vertex, global.Face, global.Mesh, global.Integrity, global.MeshIntegrity, global.FaceIntegrity, global.EdgeIntegrity, global.HalfEdgeIntegrity, global.VertexIntegrity, global.HalfEdgePrev, global.EdgeVertices, global.FaceHalfEdges, global.FaceVertices, global.VertexFaces, global.VertexHalfEdges, global.VertexNeighbors, global.MeshCentroid, global.InsertVertex, global.InsertEdge, global.DeleteEdge, global.Loop, global.CatmullClark, global.QuadSubdivide, global.Triangulate, global.Extrude, global.Pipe, global.Duplicate, global.Combine, global.Scale, global.Move, global.Invert, global.Wireframe, global.CreateFace, global.Profile, global.performanceNow, global.glMatrix, global.scrollSpeed, global.mousePosition, global.mousePressed, global.keyPressed, global.Physics, global.Particle, global.ParticleSystem, global.Spring, global.Angle, global.Euler, global.Verlet, global.RungeKutta, global.Behavior, global.Damper, global.Homing, global.Vortex, global.Attractor, global.Springs, global.Angles, global.Force, global.stlSerializer, global.stlDeserializer, global.objSerializer, global.objDeserializer, global.svgSerializer, global.imageWriter, global.fileReader, global.fileWriter, global.greaterThanZero1d, global.isEqual1d, global.isZero1d, global.area22d, global.convexHull2d, global.cross2d, global.expandPolygon2d, global.inCone2d, global.intersection2d, global.intersects2d, global.intersectsProper2d, global.isBetween2d, global.isColinear2d, global.isDiagonal2d, global.isDiagonalie2d, global.isEqual2d, global.isLeft2d, global.isLeftOn2d, global.triangulatePolygon2d, global.isColinear3d);
    global.index = mod.exports;
  }
})(this, function (module, _normalizeArray, _faceNormals, _vertexNormals, _calculateNormal, _cross, _normalize, _Edge, _HalfEdge, _Vertex, _Face, _Mesh, _Integrity, _MeshIntegrity, _FaceIntegrity, _EdgeIntegrity, _HalfEdgeIntegrity, _VertexIntegrity, _HalfEdgePrev, _EdgeVertices, _FaceHalfEdges, _FaceVertices, _VertexFaces, _VertexHalfEdges, _VertexNeighbors, _MeshCentroid, _InsertVertex, _InsertEdge, _DeleteEdge, _Loop, _CatmullClark, _QuadSubdivide, _Triangulate, _Extrude, _Pipe, _Duplicate, _Combine, _Scale, _Move, _Invert, _Wireframe, _CreateFace, _Profile, _performanceNow, _glMatrix, _scrollSpeed, _mousePosition, _mousePressed, _keyPressed, _Physics, _Particle, _ParticleSystem, _Spring, _Angle, _Euler, _Verlet, _RungeKutta, _Behavior, _Damper, _Homing, _Vortex, _Attractor, _Springs, _Angles, _Force, _stlSerializer, _stlDeserializer, _objSerializer, _objDeserializer, _svgSerializer, _imageWriter, _fileReader, _fileWriter, _greaterThanZero1d, _isEqual1d, _isZero1d, _area22d, _convexHull2d, _cross2d, _expandPolygon2d, _inCone2d, _intersection2d, _intersects2d, _intersectsProper2d, _isBetween2d, _isColinear2d, _isDiagonal2d, _isDiagonalie2d, _isEqual2d, _isLeft2d, _isLeftOn2d, _triangulatePolygon2d, _isColinear3d) {
  'use strict';

  var normalizeArray = _interopRequireWildcard(_normalizeArray);

  var faceNormals = _interopRequireWildcard(_faceNormals);

  var vertexNormals = _interopRequireWildcard(_vertexNormals);

  var calculateNormal = _interopRequireWildcard(_calculateNormal);

  var cross = _interopRequireWildcard(_cross);

  var normalize = _interopRequireWildcard(_normalize);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Vertex = _interopRequireWildcard(_Vertex);

  var Face = _interopRequireWildcard(_Face);

  var Mesh = _interopRequireWildcard(_Mesh);

  var Integrity = _interopRequireWildcard(_Integrity);

  var MeshIntegrity = _interopRequireWildcard(_MeshIntegrity);

  var FaceIntegrity = _interopRequireWildcard(_FaceIntegrity);

  var EdgeIntegrity = _interopRequireWildcard(_EdgeIntegrity);

  var HalfEdgeIntegrity = _interopRequireWildcard(_HalfEdgeIntegrity);

  var VertexIntegrity = _interopRequireWildcard(_VertexIntegrity);

  var HalfEdgePrev = _interopRequireWildcard(_HalfEdgePrev);

  var EdgeVertices = _interopRequireWildcard(_EdgeVertices);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var VertexFaces = _interopRequireWildcard(_VertexFaces);

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

  var VertexNeighbors = _interopRequireWildcard(_VertexNeighbors);

  var MeshCentroid = _interopRequireWildcard(_MeshCentroid);

  var InsertVertexOperator = _interopRequireWildcard(_InsertVertex);

  var InsertEdgeOperator = _interopRequireWildcard(_InsertEdge);

  var DeleteEdgeOperator = _interopRequireWildcard(_DeleteEdge);

  var LoopOperator = _interopRequireWildcard(_Loop);

  var CatmullClarkOperator = _interopRequireWildcard(_CatmullClark);

  var QuadSubdivideOperator = _interopRequireWildcard(_QuadSubdivide);

  var TriangulateOperator = _interopRequireWildcard(_Triangulate);

  var ExtrudeOperator = _interopRequireWildcard(_Extrude);

  var PipeOperator = _interopRequireWildcard(_Pipe);

  var DuplicateOperator = _interopRequireWildcard(_Duplicate);

  var CombineOperator = _interopRequireWildcard(_Combine);

  var ScaleOperator = _interopRequireWildcard(_Scale);

  var MoveOperator = _interopRequireWildcard(_Move);

  var InvertOperator = _interopRequireWildcard(_Invert);

  var WireframeOperator = _interopRequireWildcard(_Wireframe);

  var CreateFaceOperator = _interopRequireWildcard(_CreateFace);

  var ProfileGenerator = _interopRequireWildcard(_Profile);

  var now = _interopRequireWildcard(_performanceNow);

  var scrollWheel = _interopRequireWildcard(_scrollSpeed);

  var mousePosition = _interopRequireWildcard(_mousePosition);

  var mouseButton = _interopRequireWildcard(_mousePressed);

  var key = _interopRequireWildcard(_keyPressed);

  var Physics = _interopRequireWildcard(_Physics);

  var Particle = _interopRequireWildcard(_Particle);

  var ParticleSystem = _interopRequireWildcard(_ParticleSystem);

  var Spring = _interopRequireWildcard(_Spring);

  var Angle = _interopRequireWildcard(_Angle);

  var EulerSolver = _interopRequireWildcard(_Euler);

  var VerletSolver = _interopRequireWildcard(_Verlet);

  var RungeKuttaSolver = _interopRequireWildcard(_RungeKutta);

  var Behavior = _interopRequireWildcard(_Behavior);

  var DamperBehavior = _interopRequireWildcard(_Damper);

  var HomingBehavior = _interopRequireWildcard(_Homing);

  var VortexBehavior = _interopRequireWildcard(_Vortex);

  var AttractorBehavior = _interopRequireWildcard(_Attractor);

  var SpringsBehavior = _interopRequireWildcard(_Springs);

  var AnglesBehavior = _interopRequireWildcard(_Angles);

  var ForceBehavior = _interopRequireWildcard(_Force);

  var stlSerializer = _interopRequireWildcard(_stlSerializer);

  var stlDeserializer = _interopRequireWildcard(_stlDeserializer);

  var objSerializer = _interopRequireWildcard(_objSerializer);

  var objDeserializer = _interopRequireWildcard(_objDeserializer);

  var svgSerializer = _interopRequireWildcard(_svgSerializer);

  var imageWriter = _interopRequireWildcard(_imageWriter);

  var fileReader = _interopRequireWildcard(_fileReader);

  var fileWriter = _interopRequireWildcard(_fileWriter);

  var greaterThanZero = _interopRequireWildcard(_greaterThanZero1d);

  var isEqual = _interopRequireWildcard(_isEqual1d);

  var isZero = _interopRequireWildcard(_isZero1d);

  var area2 = _interopRequireWildcard(_area22d);

  var convexHull2 = _interopRequireWildcard(_convexHull2d);

  var cross2 = _interopRequireWildcard(_cross2d);

  var expandPolygon2 = _interopRequireWildcard(_expandPolygon2d);

  var inCone2 = _interopRequireWildcard(_inCone2d);

  var intersection2 = _interopRequireWildcard(_intersection2d);

  var intersects2 = _interopRequireWildcard(_intersects2d);

  var intersectsProper2 = _interopRequireWildcard(_intersectsProper2d);

  var isBetween2 = _interopRequireWildcard(_isBetween2d);

  var isColinear2 = _interopRequireWildcard(_isColinear2d);

  var isDiagonal2 = _interopRequireWildcard(_isDiagonal2d);

  var isDiagonalie2 = _interopRequireWildcard(_isDiagonalie2d);

  var isEqual2 = _interopRequireWildcard(_isEqual2d);

  var isLeft2 = _interopRequireWildcard(_isLeft2d);

  var isLeftOn2 = _interopRequireWildcard(_isLeftOn2d);

  var triangulatePolygon2 = _interopRequireWildcard(_triangulatePolygon2d);

  var isColinear3 = _interopRequireWildcard(_isColinear3d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  // Data Structure


  //HELPFUL UTILS

  //ARRAYS
  module.exports = Camera;

  // Generator


  // Operators


  // Queries


  // Checks


  //ONE NORMAL


  //NORMALS


  function Camera(canvas, opts) {
    if (!(this instanceof Camera)) {
      return new Camera(canvas, opts);
    }

    //Options
    opts = opts || {};

    //Parent Element
    this.canvas = canvas;

    //Events
    this.mw = scrollWheel(canvas, true);
    this.mb = mouseButton(canvas);
    this.mp = mousePosition(canvas);

    //Camera Reset
    this.lastTime = now();
    this.currentTime = this.lastTime;
    this.deltaTime = 200;

    //Interaction
    this.mouseDown = false;
    this.scratchQuat = _glMatrix.quat.create();
    this.rotation = _glMatrix.quat.create();

    this.defaultPosition = opts.position !== undefined ? opts.position : _glMatrix.vec3.fromValues(0.0, 0.0, -2.0);
    this.defaultRotation = opts.rotation !== undefined ? opts.rotation : _glMatrix.mat4.create();
    this.position = _glMatrix.vec3.clone(this.defaultPosition);
    this.theta = 0.0;
    this.damping = opts.damping || 0.9;
    this.calculateCache = false;

    this.size = _glMatrix.vec3.create();
    this.axis = _glMatrix.vec3.fromValues(0.0, 0.0, 0.0);
    this.t1 = _glMatrix.vec3.fromValues(0.0, 0.0, 0.0);
    this.pt1 = _glMatrix.vec3.fromValues(0.0, 0.0, 0.0);

    this.matrix = _glMatrix.mat4.create();
    this.rotmat = _glMatrix.mat4.create();
    this.cache = _glMatrix.mat4.create();

    this.mb.on("down", function () {
      this.mouseDown = true;
      this.resetCheck();
      this.mousePressed();
    }.bind(this));

    this.mp.on("move", function () {
      if (this.mouseDown) {
        this.mouseDragged();
      }
    }.bind(this));

    this.mb.on("up", function () {
      this.mouseDown = false;
    }.bind(this));

    this.mw.on("scroll", function () {
      this.mouseWheel();
    }.bind(this));

    this.reset();
    this.updateMatrix();
  }

  Camera.prototype.view = function (out) {
    _glMatrix.mat4.copy(out, this.matrix);
  };

  Camera.prototype.update = function () {
    this.updateSize();
    this.updateEasing();
    this.updateMatrix();
  };

  Camera.prototype.resetCheck = function () {
    this.currentTime = now();
    if (this.currentTime - this.lastTime < this.deltaTime) {
      this.reset();
    }
    this.lastTime = this.currentTime;
  };

  Camera.prototype.reset = function () {
    _glMatrix.vec3.copy(this.position, this.defaultPosition);
    _glMatrix.quat.identity(this.scratchQuat);
    _glMatrix.quat.identity(this.rotation);
    // mat4.identity( this.cache );
    _glMatrix.mat4.copy(this.cache, this.defaultRotation);
    _glMatrix.mat4.identity(this.rotmat);
  };

  Camera.prototype.mousePressed = function () {
    if (this.calculateCache) {
      this.cacheRotation();
    }

    this.theta = 0.0;
    _glMatrix.quat.identity(this.scratchQuat);
    this.setArcBallVector(this.mp[0], this.mp[1]);
  };

  Camera.prototype.mouseDragged = function () {
    this.setArcBallVector(this.mp[0], this.mp[1]);
    this.updateArcBallRotation();
    this.mp.flush();
  };

  Camera.prototype.mouseWheel = function () {
    this.position[2] += this.mw[1] * 0.01;
    this.mw.flush();
  };

  Camera.prototype.updateArcBallRotation = function (theta) {
    _glMatrix.vec3.normalize(this.t1, this.t1);
    _glMatrix.vec3.normalize(this.pt1, this.pt1); //might not be needed..
    this.theta = theta || -Math.acos(Math.min(1.0, _glMatrix.vec3.dot(this.t1, this.pt1)));
    _glMatrix.vec3.cross(this.axis, this.t1, this.pt1);
    _glMatrix.vec3.normalize(this.axis, this.axis);
    _glMatrix.quat.setAxisAngle(this.scratchQuat, this.axis, this.theta);
    _glMatrix.quat.multiply(this.rotation, this.rotation, this.scratchQuat);
  };

  Camera.prototype.setArcBallVector = function (x, y) {
    _glMatrix.vec3.copy(this.pt1, this.t1);
    this.t1[0] = 2.0 * (x / this.size[0]) - 1.0;
    this.t1[1] = 2.0 * (y / this.size[1]) - 1.0;
    this.t1[1] *= -1.0;

    var r = this.t1[0] * this.t1[0] + this.t1[1] * this.t1[1];
    if (r > 1.000001) {
      _glMatrix.vec3.normalize(this.t1, this.t1);
    } else {
      this.t1[2] = Math.sqrt(1.0 - r);
    }
  };

  Camera.prototype.updateSize = function () {
    var canvas = this.canvas;
    var cws = canvas.style.width;
    var found = cws.search("px");
    var fw = parseFloat(cws.substring(0, found));
    var dpri = 1.0 / (canvas.width / fw);
    var width = dpri * canvas.width;
    var height = dpri * canvas.height;
    _glMatrix.vec3.set(this.size, width, height, 0.0);
  };

  Camera.prototype.updateEasing = function () {
    if (Math.abs(this.theta) > 0.0001 && !this.mouseDown) {
      this.theta *= this.damping;
      this.updateArcBallRotation(this.theta);
      this.calculateCache = true;
    } else if (this.calculateCache) {
      this.cacheRotation();
    }
  };

  Camera.prototype.updateMatrix = function () {
    _glMatrix.mat4.fromTranslation(this.matrix, this.position);
    _glMatrix.mat4.fromQuat(this.rotmat, this.rotation);
    _glMatrix.mat4.multiply(this.rotmat, this.rotmat, this.cache);
    _glMatrix.mat4.multiply(this.matrix, this.matrix, this.rotmat);
  };

  Camera.prototype.cacheRotation = function () {
    _glMatrix.mat4.copy(this.cache, this.rotmat);
    _glMatrix.mat4.identity(this.rotmat);
    _glMatrix.quat.identity(this.rotation);
    this.calculateCache = false;
  };

  // Core

  // Solvers

  // import * as VerletSolver from './sps/Solvers/VerletSolver';

  // Behaviors


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


  //OBJS


  //SVGS


  //IMAGES


  //FILE UTILITY

  //1D Functions


  //2D Functions


  //3D Functions
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.area22d = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-equal-1d', './is-left-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-equal-1d'), require('./is-left-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isEqual1d, global.isLeft2d);
    global.convexHull2d = mod.exports;
  }
})(this, function (module, _isEqual1d, _isLeft2d) {
  'use strict';

  var isEqual = _interopRequireWildcard(_isEqual1d);

  var isLeft = _interopRequireWildcard(_isLeft2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (polygon) {
    // find the lowest rightmost point
    var ri = -1;
    var rx = -1000000,
        ry = 10000000;
    var len = polygon.length;
    var x, y;
    for (var i = 0; i < len; i++) {
      x = polygon[i][0];
      y = polygon[i][1];
      if (y < ry || y == ry && x > rx) {
        ri = i;
        rx = x;
        ry = y;
      }
    }

    // calculate the angles (relative to the positive x-axis) from bottom
    // right most point and every other point
    var angles = [];
    for (var i = 0; i < len; i++) {
      x = polygon[i][0] - rx;
      y = polygon[i][1] - ry;
      angles[i] = { 'key': i, 'value': Math.atan2(y, x), 'length': x * x + y * y };
    }

    // sort the angles, keep the indicies of the original points for referece
    angles.sort(function (a, b) {
      if (isEqual(a.value, b.value)) {
        return 0;
      } else if (a.value < b.value) {
        return -1;
      }
      return 1;
    });

    // remove points that have the same angle ( only remove the one closest to
    // the bottom right most point )
    var a, b;
    for (var i = 1; i < angles.length; i++) {
      a = angles[i - 1];
      b = angles[i];
      if (isEqual(a.value, b.value)) {
        if (a.length > b.length) {
          angles.splice(i, 1); //remove b ( 1 )
        } else {
          angles.splice(i - 1, 1); //remove a ( 0 )
        }
        i--;
      }
    }

    // use graham's algorithm to find the convex hull ( checks
    // to see if the next point on the stack turns left or right
    // if it turns right, the remove it and test again till you turn left
    var i = 1;
    var limit = angles.length;
    var index;
    var stack = [angles[limit - 1].key, ri];
    while (i < limit) {
      index = angles[i].key;
      var s = stack.length - 1;
      var sl = s - 1;
      if (isLeft(polygon[stack[sl]], polygon[stack[s]], polygon[index])) {
        stack.push(index);
        i++;
      } else {
        stack.pop();
      }
    }
    return stack;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.cross2d = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a, b) {
    return a[0] * b[1] - b[0] * a[1];
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './intersection-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./intersection-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.intersection2d);
    global.expandPolygon2d = mod.exports;
  }
})(this, function (module, _glMatrix, _intersection2d) {
  'use strict';

  var intersection = _interopRequireWildcard(_intersection2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (polygon, amount) {
    amount = amount == undefined ? 0.5 : amount;
    var result = [];
    var len = polygon.length;
    var cpr = _glMatrix.vec3.create();
    var zdir = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);
    var cdir = _glMatrix.vec3.create();
    var a = _glMatrix.vec2.create();
    var b = _glMatrix.vec2.create();
    var c = _glMatrix.vec2.create();
    var d = _glMatrix.vec2.create();

    var dir = _glMatrix.vec2.create();
    var at, bt, ct, t;
    // Preform first a, b, calculation so we optimise loop
    at = polygon[len - 1];
    bt = polygon[0];
    _glMatrix.vec2.copy(a, at);
    _glMatrix.vec2.copy(b, bt);
    _glMatrix.vec2.subtract(dir, b, a);
    _glMatrix.vec3.set(cdir, dir[0], dir[1], 0.0);
    _glMatrix.vec3.cross(cpr, cdir, zdir);
    _glMatrix.vec3.normalize(cpr, cpr);
    _glMatrix.vec3.scale(cpr, cpr, amount);
    _glMatrix.vec2.copy(dir, cpr);
    _glMatrix.vec2.add(a, a, dir);
    _glMatrix.vec2.add(b, b, dir);

    for (var i = 0; i < len; i++) {
      bt = polygon[i];
      ct = polygon[(i + 1) % len];

      _glMatrix.vec2.copy(c, bt);
      _glMatrix.vec2.copy(d, ct);

      _glMatrix.vec2.subtract(dir, d, c);
      _glMatrix.vec3.set(cdir, dir[0], dir[1], 0.0);
      _glMatrix.vec3.cross(cpr, cdir, zdir);
      _glMatrix.vec3.normalize(cpr, cpr);
      _glMatrix.vec3.scale(cpr, cpr, amount);
      _glMatrix.vec2.copy(dir, cpr);
      _glMatrix.vec2.add(c, c, dir);
      _glMatrix.vec2.add(d, d, dir);

      result.push(intersection(a, b, c, d));

      _glMatrix.vec2.copy(a, c);
      _glMatrix.vec2.copy(b, d);
    }
    return result;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.greaterThanZero1d = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a) {
    return a > 0.00001;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-left-on-2d', './is-left-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-left-on-2d'), require('./is-left-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isLeftOn2d, global.isLeft2d);
    global.inCone2d = mod.exports;
  }
})(this, function (module, _isLeftOn2d, _isLeft2d) {
  'use strict';

  var isLeftOn = _interopRequireWildcard(_isLeftOn2d);

  var isLeft = _interopRequireWildcard(_isLeft2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a0, a, a1, b) {
    if (isLeftOn(a, a1, a0)) {
      return isLeft(a, b, a0) && isLeft(b, a, a1);;
    }
    return !(isLeftOn(b, a, a0) && isLeftOn(a, b, a1));
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './cross-2d', './is-zero-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./cross-2d'), require('./is-zero-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.cross2d, global.isZero1d);
    global.intersection2d = mod.exports;
  }
})(this, function (module, _glMatrix, _cross2d, _isZero1d) {
  'use strict';

  var cross = _interopRequireWildcard(_cross2d);

  var isZero = _interopRequireWildcard(_isZero1d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c, d) {
    var p = _glMatrix.vec2.clone(a);
    var r = _glMatrix.vec2.clone(b);
    _glMatrix.vec2.subtract(r, r, p);

    var q = _glMatrix.vec2.clone(c);
    var s = _glMatrix.vec2.clone(d);
    _glMatrix.vec2.subtract(s, s, q);

    var dqp = _glMatrix.vec2.create();
    _glMatrix.vec2.subtract(dqp, q, p);

    var t = -1.0;
    var rxs = cross(r, s);
    var qpxr = cross(dqp, r);
    var qpxs = cross(dqp, s);
    if (rxs != 0) {
      t = qpxs / rxs;
    } else if (isZero(qpxr) && isZero(rxs)) {
      var t = _glMatrix.vec2.dot(dqp, r) / _glMatrix.vec2.dot(r, r);
    } else if (!isZero(qpxr) && isZero(rxs)) {
      throw 'lines are parallel and do no intersect';
    }
    return _glMatrix.vec2.fromValues(p[0] + t * r[0], p[1] + t * r[1]);
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './intersects-proper-2d', './is-between-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./intersects-proper-2d'), require('./is-between-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.intersectsProper2d, global.isBetween2d);
    global.intersects2d = mod.exports;
  }
})(this, function (module, _intersectsProper2d, _isBetween2d) {
  'use strict';

  var intersectsProper = _interopRequireWildcard(_intersectsProper2d);

  var isBetween = _interopRequireWildcard(_isBetween2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c, d) {
    if (intersectsProper(a, b, c, d)) {
      return true;
    } else if (isBetween(a, b, c) || isBetween(a, b, d) || isBetween(c, d, a) || isBetween(c, d, b)) {
      return true;
    }
    return false;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-colinear-2d', './is-left-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-colinear-2d'), require('./is-left-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isColinear2d, global.isLeft2d);
    global.intersectsProper2d = mod.exports;
  }
})(this, function (module, _isColinear2d, _isLeft2d) {
  'use strict';

  var isColinear = _interopRequireWildcard(_isColinear2d);

  var isLeft = _interopRequireWildcard(_isLeft2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c, d) {
    if (isColinear(a, b, c) || isColinear(a, b, d) || isColinear(c, d, a) || isColinear(c, d, b)) {
      return false;
    }
    if (isLeft(a, b, c) != isLeft(a, b, d) && isLeft(c, d, a) != isLeft(c, d, b)) {
      return true;
    }
    return false;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-colinear-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-colinear-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isColinear2d);
    global.isBetween2d = mod.exports;
  }
})(this, function (module, _isColinear2d) {
  'use strict';

  var isColinear = _interopRequireWildcard(_isColinear2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c) {
    if (!isColinear(a, b, c)) {
      return false;
    }
    if (a[0] !== b[0]) {
      return a[0] <= c[0] && c[0] <= b[0] || a[0] >= c[0] && c[0] >= b[0];
    } else {
      return a[1] <= c[1] && c[1] <= b[1] || a[1] >= c[1] && c[1] >= b[1];
    }
    return false;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-zero-1d', './area2-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-zero-1d'), require('./area2-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isZero1d, global.area22d);
    global.isColinear2d = mod.exports;
  }
})(this, function (module, _isZero1d, _area22d) {
  'use strict';

  var isZero = _interopRequireWildcard(_isZero1d);

  var area2 = _interopRequireWildcard(_area22d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c) {
    return isZero(area2(a, b, c));
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-zero-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-zero-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isZero1d);
    global.isColinear3d = mod.exports;
  }
})(this, function (module, _isZero1d) {
  'use strict';

  var isZero = _interopRequireWildcard(_isZero1d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c) {
    var cax = c[0] - a[0];
    var cay = c[1] - a[1];
    var caz = c[2] - a[2];
    var bax = b[0] - a[0];
    var bay = b[1] - a[1];
    var baz = b[2] - a[2];
    return isZero(caz * bay - baz * cay) && isZero(baz * cax - bax * caz) && isZero(bax * cay - bay * cax);
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './in-cone-2d', './is-diagonalie-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./in-cone-2d'), require('./is-diagonalie-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.inCone2d, global.isDiagonalie2d);
    global.isDiagonal2d = mod.exports;
  }
})(this, function (module, _inCone2d, _isDiagonalie2d) {
  'use strict';

  var inCone = _interopRequireWildcard(_inCone2d);

  var isDiagonalie = _interopRequireWildcard(_isDiagonalie2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (i, j, polygon) {
    var len = polygon.length;
    var a0 = polygon[i - 1 < 0 ? len - 1 : i - 1];
    var a = polygon[i];
    var a1 = polygon[(i + 1) % len];

    var b0 = polygon[j - 1 < 0 ? len - 1 : j - 1];
    var b = polygon[j];
    var b1 = polygon[(j + 1) % len];

    if (inCone(a0, a, a1, b) && inCone(b0, b, b1, a) && isDiagonalie(a, b, polygon)) {
      return true;
    }
    return false;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-equal-2d', './intersects-proper-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-equal-2d'), require('./intersects-proper-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isEqual2d, global.intersectsProper2d);
    global.isDiagonalie2d = mod.exports;
  }
})(this, function (module, _isEqual2d, _intersectsProper2d) {
  'use strict';

  var isEqual = _interopRequireWildcard(_isEqual2d);

  var intersectsProper = _interopRequireWildcard(_intersectsProper2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, polygon) {
    var c,
        c1,
        len = polygon.length;
    for (var i = 0; i < len; i++) {
      c = polygon[i];
      c1 = polygon[(i + 1) % len];
      if (!isEqual(c, a) && !isEqual(c1, a) && !isEqual(c, b) && !isEqual(c1, b) && intersectsProper(a, b, c, c1)) {
        return false;
      }
    }
    return true;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-zero-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-zero-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isZero1d);
    global.isEqual1d = mod.exports;
  }
})(this, function (module, _isZero1d) {
  'use strict';

  var isZero = _interopRequireWildcard(_isZero1d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b) {
    return a === b || isZero(a - b);
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-zero-1d', './is-equal-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-zero-1d'), require('./is-equal-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isZero1d, global.isEqual1d);
    global.isEqual2d = mod.exports;
  }
})(this, function (module, _isZero1d, _isEqual1d) {
  'use strict';

  var isZero = _interopRequireWildcard(_isZero1d);

  var isEqual = _interopRequireWildcard(_isEqual1d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b) {
    if (isEqual(a[0], b[0]) && isEqual(a[1], b[1])) {
      return true;
    }
    return false;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './greater-than-zero-1d', './area2-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./greater-than-zero-1d'), require('./area2-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.greaterThanZero1d, global.area22d);
    global.isLeft2d = mod.exports;
  }
})(this, function (module, _greaterThanZero1d, _area22d) {
  'use strict';

  var greaterThanZero = _interopRequireWildcard(_greaterThanZero1d);

  var area2 = _interopRequireWildcard(_area22d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c) {
    return greaterThanZero(area2(a, b, c));
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './area2-2d', './greater-than-zero-1d', './is-zero-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./area2-2d'), require('./greater-than-zero-1d'), require('./is-zero-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.area22d, global.greaterThanZero1d, global.isZero1d);
    global.isLeftOn2d = mod.exports;
  }
})(this, function (module, _area22d, _greaterThanZero1d, _isZero1d) {
  'use strict';

  var area2 = _interopRequireWildcard(_area22d);

  var greaterThanZero = _interopRequireWildcard(_greaterThanZero1d);

  var isZero = _interopRequireWildcard(_isZero1d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c) {
    var res = area2(a, b, c);
    return greaterThanZero(res) || isZero(res);
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.isZero1d = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a) {
    return a === 0 || Math.abs(a) < 0.000001;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-diagonal-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-diagonal-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isDiagonal2d);
    global.triangulatePolygon2d = mod.exports;
  }
})(this, function (module, _isDiagonal2d) {
  'use strict';

  var isDiagonal = _interopRequireWildcard(_isDiagonal2d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (polygon) {
    var len = polygon.length;
    var ears = [];
    for (var i = 0; i < len; i++) {
      var i0 = i - 1 < 0 ? len - 1 : i - 1;
      var i1 = (i + 1) % len;
      ears.push(isDiagonal(i0, i1, polygon));
    }
    var polys = polygon.slice(0);
    var v0,
        v1,
        v2 = 0,
        v3,
        v4,
        n = polys.length,
        end = 0;
    var lookups = [];
    var llen = 0;
    for (var i = 0; i < len; i++) {
      lookups[i] = i;
    }
    var cells = [];
    while (n > 3) {
      do {
        llen = lookups.length;
        v2 = v2 % llen;
        if (ears[lookups[v2]]) {
          v4 = (v2 + 2) % llen;
          v3 = (v2 + 1) % llen;
          //v2//
          v1 = v2 - 1;
          v1 = v1 < 0 ? llen + v1 : v1;
          v0 = v1 - 1;
          v0 = v0 < 0 ? llen + v0 : v0;

          v0 = v0 % llen;
          v1 = v1 % llen;
          v2 = v2 % llen;
          v3 = v3 % llen;
          v4 = v4 % llen;

          ears[lookups[v1]] = isDiagonal(lookups[v0], lookups[v3], polys);
          ears[lookups[v3]] = isDiagonal(lookups[v1], lookups[v4], polys);
          cells.push([lookups[v2], lookups[v3], lookups[v1]]);
          lookups.splice(v2, 1);
          end = v3;
          n--;
          break;
        }
        v2++;
      } while (v2 != end);
    }
    cells.push([lookups[1], lookups[2], lookups[0]]);
    return cells;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './cross', './normalize'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./cross'), require('./normalize'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.cross, global.normalize);
    global.calculateNormal = mod.exports;
  }
})(this, function (module, _cross, _normalize) {
  'use strict';

  var cross = _interopRequireWildcard(_cross);

  var normalize = _interopRequireWildcard(_normalize);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (a, b, c) {
    var r = [0.0, 0.0, 0.0];
    cross(r, a, b, c);
    normalize(r, r);
    return r;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.cross = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (out, a, b, c) {
    var abx = b[0] - a[0],
        aby = b[1] - a[1],
        abz = b[2] - a[2],
        acx = c[0] - a[0],
        acy = c[1] - a[1],
        acz = c[2] - a[2];
    out[0] = aby * acz - abz * acy;
    out[1] = abz * acx - abx * acz;
    out[2] = abx * acy - aby * acx;
    return out;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'guf', './calculate-normal'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('guf'), require('./calculate-normal'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.guf, global.calculateNormal);
    global.faceNormals = mod.exports;
  }
})(this, function (module, _guf, _calculateNormal) {
  'use strict';

  var calculateNormal = _interopRequireWildcard(_calculateNormal);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (verts, faces) {
    var positions = verts;
    var con = verts[0].constructor;
    if (con === Array || con == Float32Array) {
      positions = (0, _guf.normalizeArray)(verts);
    }
    var cells = faces[0].constructor === Array ? (0, _guf.normalizeArray)(faces) : faces;
    var normals = [];
    var i0, i1, i2;
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    for (var i = 0; i < cells.length; i += 3) {
      i0 = cells[i] * 3;
      i1 = cells[i + 1] * 3;
      i2 = cells[i + 2] * 3;
      a[0] = positions[i0];a[1] = positions[i0 + 1];a[2] = positions[i0 + 2];
      b[0] = positions[i1];b[1] = positions[i1 + 1];b[2] = positions[i1 + 2];
      c[0] = positions[i2];c[1] = positions[i2 + 1];c[2] = positions[i2 + 2];
      d = calculateNormal(a, b, c);
      normals[i] = d[0];
      normals[i + 1] = d[1];
      normals[i + 2] = d[2];
    }
    return normals;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.normalizeArray = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a) {
    var result = [];
    var len = a.length;
    var slen = a[0].length;
    var addZ = slen < 3 ? true : false;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < slen; j++) {
        result.push(a[i][j]);
      }
      if (addZ) {
        result.push(0.0);
      }
    }
    return result;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.normalize = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (out, v) {
    var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    out[0] = v[0] / length;
    out[1] = v[1] / length;
    out[2] = v[2] / length;
    return out;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './cross', './normalize', './normalize-array'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./cross'), require('./normalize'), require('./normalize-array'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.cross, global.normalize, global.normalizeArray);
    global.vertexNormals = mod.exports;
  }
})(this, function (module, _cross, _normalize, _normalizeArray) {
  'use strict';

  var cross = _interopRequireWildcard(_cross);

  var normalize = _interopRequireWildcard(_normalize);

  var normalizeArray = _interopRequireWildcard(_normalizeArray);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (verts, faces) {
    var positions = verts[0].constructor === Array ? normalizeArray(verts) : verts;
    var cells = faces[0].constructor === Array ? normalizeArray(faces) : faces;

    //Create Vertex Face Map ( tells you which vert belong to what faces )
    var map = {};
    var plen = positions.length / 3;
    for (var i = 0; i < plen; i++) {
      map[i] = [];
    }

    //Fill in Map
    var clen = cells.length;
    var i0, i1, i2, index;
    for (var i = 0; i < clen; i += 3) {
      index = i;
      i0 = index;i1 = index + 1;i2 = index + 2;
      map[cells[i0]].push(i);
      map[cells[i1]].push(i);
      map[cells[i2]].push(i);
    }

    //Calculate Vertex Normals
    var normals = [];
    var temp = [0.0, 0.0, 0.0];
    var norm = [0.0, 0.0, 0.0];
    var keys = Object.keys(map);
    var v0,
        v1,
        v2,
        a = [0.0, 0.0, 0.0],
        b = [0.0, 0.0, 0.0],
        c = [0.0, 0.0, 0.0];
    for (var i = 0; i < keys.length; i++) {
      var faces = map[keys[i]];
      for (var j = 0; j < faces.length; j++) {
        var index = faces[j];

        v0 = cells[index];
        v1 = cells[index + 1];
        v2 = cells[index + 2];

        a[0] = positions[v0 * 3];
        a[1] = positions[v0 * 3 + 1];
        a[2] = positions[v0 * 3 + 2];

        b[0] = positions[v1 * 3];
        b[1] = positions[v1 * 3 + 1];
        b[2] = positions[v1 * 3 + 2];

        c[0] = positions[v2 * 3];
        c[1] = positions[v2 * 3 + 1];
        c[2] = positions[v2 * 3 + 2];

        cross(temp, a, b, c);

        norm[0] += temp[0];
        norm[1] += temp[1];
        norm[2] += temp[2];
      }
      normalize(norm, norm);
      normals.push(norm[0], norm[1], norm[2]);
      norm[0] = 0.0;norm[1] = 0.0;norm[2] = 0.0;
    }
    return normals;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.fileReader = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (filePath, callback) {
    var client = new XMLHttpRequest();
    client.open('GET', filePath);
    client.onreadystatechange = function () {
      if (client.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      if (client.status !== 200) {
        return;
      }

      if (callback) {
        callback(client.responseText);
      }
    };
    client.send();
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.fileWriter = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (filename, data) {
    var pom = document.createElement('a');
    pom.href = URL.createObjectURL(new Blob([data], { type: 'text/plain' }));
    pom.download = filename;
    document.body.appendChild(pom);

    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.imageWriter = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (filename, data) {
    var pom = document.createElement('a');
    pom.href = URL.createObjectURL(dataURItoBlob(data));
    pom.download = filename;
    document.body.appendChild(pom);

    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  };

  function dataURItoBlob(data) {
    var byteString;
    if (data.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(data.split(',')[1]);
    } else {
      byteString = unescape(data.split(',')[1]);
    }

    var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
    var dataOut = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      dataOut[i] = byteString.charCodeAt(i);
    }

    return new Blob([dataOut], { type: mimeString });
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.objDeserializer = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (input, opts) {

    opts = opts ? opts : {};
    var scale = opts.scale ? opts.scale : 1.0;
    var invert = opts.flipYZ ? -1.0 : 1.0;
    var flipYZ = opts.flipYZ ? true : false;

    var positions = [];
    var normals = [];
    var texcoords = [];

    var cells = [];
    var ncells = [];
    var tcells = [];

    var vRegex = /^v\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;
    var vt2Regex = /^vt\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/; //texcoord 2D
    var vt3Regex = /^vt\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/; //texcoord 3D
    var vnRegex = /^vn\s*(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/; //normal
    var fRegex = /^f\s*(.*)/; //Find Face

    var fv = /^(\d+)$/; //Found vertex
    var fvt = /^(\d+)\/(\d+)$/; //Found vertex texcoord
    var fvnt = /^(\d+)\/(\d+)\/(\d+)$/; //Found vertex normal texcoord
    var fvn = /^(\d+)\/\/(\d+)$/; //Found vertex normal

    var lines = input.split('\n');
    var len = lines.length;
    var line, results;
    for (var i = 0; i < len; i++) {
      line = lines[i];

      results = line.match(vRegex); // got a vertex
      if (results) {
        var p = [];
        p.push(scale * parseFloat(results[1]));
        p.push(scale * parseFloat(results[flipYZ ? 3 : 2]));
        p.push(scale * parseFloat(results[flipYZ ? 2 : 3]));
        positions.push(p);
        continue;
      }

      results = line.match(vnRegex); // got a normal
      if (results) {
        var p = [];
        p.push(invert * parseFloat(results[1]));
        p.push(invert * parseFloat(results[flipYZ ? 3 : 2]));
        p.push(invert * parseFloat(results[flipYZ ? 2 : 3]));
        normals.push(p);
        continue;
      }

      results = line.match(vt2Regex); // got a texcoord v2
      if (results) {
        var t = [];
        t.push(parseFloat(results[1]));
        t.push(parseFloat(results[2]));
        texcoords.push(t);
        continue;
      }

      results = line.match(vt3Regex); //got a texcoord v3
      if (results) {
        var t = [];
        t.push(parseFloat(results[1]));
        t.push(parseFloat(results[2]));
        t.push(parseFloat(results[3]));
        texcoords.push(t);
        continue;
      }

      results = line.match(fRegex);
      if (results) {
        var parts = results[1].split(' ');
        var plen = parts.length;

        var vpc = []; //positions cells
        var vtc = []; //texture cells
        var vnc = []; //normal cells
        for (var k = 0; k < plen; k++) {
          var part = parts[k];

          var res = part.match(fv);
          if (res) {
            vpc.push(parseInt(res[1]) - 1);
            continue;
          }

          res = part.match(fvt);
          if (res) {
            vpc.push(parseInt(res[1]) - 1);
            vtc.push(parseInt(res[2]) - 1);
            continue;
          }

          res = part.match(fvnt);
          if (res) {
            vpc.push(parseInt(res[1]) - 1);
            vtc.push(parseInt(res[2]) - 1);
            vnc.push(parseInt(res[3]) - 1);
            continue;
          }

          res = part.match(fvn);
          if (res) {
            vpc.push(parseInt(res[1]) - 1);
            vnc.push(parseInt(res[2]) - 1);
            continue;
          }
        }

        if (vpc.length) cells.push(vpc);
        if (vtc.length) tcells.push(vtc);
        if (vnc.length) ncells.push(vnc);
      }
    }

    return {
      positions: positions,
      normals: normals,
      texcoords: texcoords,
      cells: cells,
      tcells: tcells,
      ncells: ncells
    };
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.objSerializer = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (input) {
    if (input.constructor === Array) {
      var output = "";
      for (var i = 0; i < input.length; i++) {
        output += serialize(input[0], i);
      }
      return output;
    } else {
      return serialize(input, 0);
    }
  };

  function serialize(input, index) {
    if (input.positions === undefined || input.cells === undefined) {
      throw "Input Not Valid: Does not contain any positions or cells";
    }
    var name = input.name === undefined ? "model" + index : input.name;
    var cells = input.cells;
    var positions = input.positions;

    //Write verts
    var obj = "g " + name + "\n";
    var verts = "";
    var norms = "";
    var faces = "";
    if (positions[0].constructor === Number) {
      for (var i = 0; i < positions.length; i += 3) {
        verts += "v " + positions[i] + " " + positions[i + 1] + " " + positions[i + 2] + "\n";
      }
    } else {
      for (var i = 0; i < positions.length; i++) {
        verts += "v " + positions[i][0] + " " + positions[i][1] + " " + positions[i][2] + "\n";
      }
    }

    if (cells[0].constructor === Number) {
      for (var i = 0; i < cells.length; i += 3) {
        var i0 = cells[i] + 1;
        var i1 = cells[i + 1] + 1;
        var i2 = cells[i + 2] + 1;
        faces += "f " + i0 + "//" + i0 + " " + i1 + "//" + i1 + " " + i2 + "//" + i2 + "\n";
      }
    } else {
      for (var i = 0; i < cells.length; i++) {
        var i0 = cells[i][0] + 1;
        var i1 = cells[i][1] + 1;
        var i2 = cells[i][2] + 1;
        faces += "f " + i0 + "//" + i0 + " " + i1 + "//" + i1 + " " + i2 + "//" + i2 + "\n";
      }
    }

    obj += verts;
    obj += norms;
    obj += faces;
    return obj;
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.stlDeserializer = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (input, opts) {

    opts = opts ? opts : {};
    var scale = opts.scale ? opts.scale : 1.0;
    var flipYZ = opts.flipYZ ? true : false;

    var objects = [];
    var currentObject;

    var solidStartRegex = /^solid\s(.*)$/;
    var solidEndRegex = /^endsolid\s(.*)$/;
    var facetNormalRegex = /^\s*facet\snormal\s(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;
    var vertexRegex = /^\s*vertex\s(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)[,|\s]?\s?(-?\d*\.?\d*e*[-\+]*\d*)\s*$/;

    var x, y, z;

    var lines = input.split('\n');
    var len = lines.length;
    var line, results;
    for (var i = 0; i < len; i++) {
      line = lines[i];
      var res = line.match(solidStartRegex); // got a new solid
      if (res) {
        currentObject = {
          name: res[1],
          normals: [],
          positions: []
        };
        continue;
      }

      res = line.match(facetNormalRegex);
      if (res) {
        x = parseFloat(res[1]);
        y = parseFloat(res[flipYZ ? 3 : 2]);
        z = parseFloat(res[flipYZ ? 2 : 3]);
        currentObject.normals.push([x, y, z]);
        currentObject.normals.push([x, y, z]);
        currentObject.normals.push([x, y, z]);
        continue;
      }

      res = line.match(vertexRegex);
      if (res) {
        currentObject.positions.push([scale * parseFloat(res[1]), scale * parseFloat(res[flipYZ ? 3 : 2]), scale * parseFloat(res[flipYZ ? 2 : 3])]);
        continue;
      }

      var res = line.match(solidEndRegex);
      if (res) {
        objects.push(currentObject);
      }
    }

    return objects;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'guf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('guf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.guf);
    global.stlSerializer = mod.exports;
  }
})(this, function (module, _guf) {
  'use strict';

  module.exports = function (input) {
    if (input.constructor === Array) {
      var output = "";
      for (var i = 0; i < input.length; i++) {
        output += serialize(input[0], i);
      }
      return output;
    } else {
      return serialize(input, 0);
    }
  };

  function serialize(input, index) {
    if (input.positions === undefined || input.cells === undefined) {
      throw "Input Not Valid: Does not contain any positions or cells";
    }
    var name = input.name === undefined ? "model" + index : input.name;
    var cells = input.cells[0].constructor === Array ? (0, _guf.normalizeArray)(input.cells) : input.cells;
    var positions = input.positions;
    var con = input.positions[0].constructor;
    if (con === Array || con == Float32Array) {
      positions = (0, _guf.normalizeArray)(input.positions);
    }

    var normals = undefined;
    if (input.normals != undefined) {
      normals = input.normals[0].constructor === Array ? (0, _guf.normalizeArray)(input.normals) : input.normals;
    } else {
      normals = (0, _guf.faceNormals)(positions, cells);
    }

    var i0, i1, i2, a, b, c;
    var stl = "solid " + name + "\n";
    for (var i = 0; i < cells.length; i += 3) {
      i0 = cells[i] * 3;
      i1 = cells[i + 1] * 3;
      i2 = cells[i + 2] * 3;
      stl += "facet normal " + normals[i] + " " + normals[i + 1] + " " + normals[i + 2] + "\n";
      stl += "\touter loop \n";
      stl += "\t\tvertex" + " " + positions[i0] + " " + positions[i0 + 1] + " " + positions[i0 + 2] + "\n";
      stl += "\t\tvertex" + " " + positions[i1] + " " + positions[i1 + 1] + " " + positions[i1 + 2] + "\n";
      stl += "\t\tvertex" + " " + positions[i2] + " " + positions[i2 + 1] + " " + positions[i2 + 2] + "\n";
      stl += "\tendloop \n";
      stl += "endfacet \n";
    }
    stl += 'endsolid\n';
    return stl;
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "guf"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("guf"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.guf);
    global.svgSerializer = mod.exports;
  }
})(this, function (module, _guf) {
  "use strict";

  var width = -1.0;var height = -1.0;

  module.exports = function (input) {
    var content = "";
    width = -1.0;height = -1.0;
    if (input.constructor === Array) {
      for (var i = 0; i < input.length; i++) {
        content += serialize(input[0]);
      }
    } else {
      content += serialize(input);
    }
    var output = "<svg ";
    output += "width=\"" + width + "\" ";
    output += "height=\"" + height + "\" ";
    output += "xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n";
    output += content;
    output += "</svg>\n";
    return output;
  };

  function serialize(input) {
    if (input.polyline === undefined && input.polygon === undefined) {
      throw "Input Not Valid: Does not contain any polylines or polygons";
    }

    var points = input.polyline;
    var inc = input.size !== undefined ? input.size : 3;
    var stroke = input.stroke !== undefined ? input.stroke : "black";
    var strokeWidth = input.strokeWidth !== undefined ? input.strokeWidth : "1";
    var fill = input.fill !== undefined ? input.fill : "none";

    var type = "polyline";
    if (points === undefined) {
      points = input.polygon;
      type = "polygon";
    }

    var pl;
    if (points[0].constructor === Array) {
      pl = (0, _guf.normalizeArray)(points);
      inc = 3;
    } else {
      pl = points;
    }

    var bb = calculateBoundingRect(pl);
    var tl = bb[0];
    var br = bb[1];
    var w = br[0] - tl[0];
    var h = tl[1] - br[1];
    if (w > width) {
      width = w;
    }
    if (h > height) {
      height = h;
    }
    tl[0] *= -1.0;
    var plen = pl.length;
    var output = "\t<" + type + " points=\"";

    for (var i = 0; i < plen; i += inc) {
      output += tl[0] + pl[i] + ",";
      output += tl[1] + -1.0 * pl[i + 1];
      if (i + inc < plen) {
        output += " ";
      } else {
        output += "\" ";
      }
    }

    output += "stroke=\"" + stroke;
    output += "\" stroke-width=\"" + strokeWidth;
    output += "\" fill=\"" + fill;
    output += "\" />\n";

    return output;
  }

  function calculateBoundingRect(points) {
    var tl = [100000000.0, -100000000.0];
    var br = [-100000000.0, 100000000.0];

    var len = points.length;
    for (var i = 0; i < len; i += 3) {
      var x = points[i];
      var y = points[i + 1];
      if (x < tl[0]) {
        tl[0] = x;
      }
      if (x > br[0]) {
        br[0] = x;
      }
      if (y > tl[1]) {
        tl[1] = y;
      }
      if (y < br[1]) {
        br[1] = y;
      }
    }
    return [tl, br];
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Edge = mod.exports;
  }
})(this, function (module) {
  "use strict";

  function Edge() {
    this.halfEdge = undefined;
    this.index = -1;
  };

  Edge.prototype.setIndex = function (index) {
    this.index = index;
  };

  Edge.prototype.getIndex = function () {
    return this.index;
  };

  Edge.prototype.setHalfEdge = function (halfEdge) {
    this.halfEdge = halfEdge;
  };

  Edge.prototype.getHalfEdge = function () {
    return this.halfEdge;
  };

  module.exports = Edge;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Face = mod.exports;
  }
})(this, function (module) {
  "use strict";

  function Face() {
    this.halfEdge = undefined; // points to one of the halfedges associated with this face
    this.index = -1;
  };

  Face.prototype.setIndex = function (index) {
    this.index = index;
  };

  Face.prototype.getIndex = function () {
    return this.index;
  };

  Face.prototype.setHalfEdge = function (halfEdge) {
    this.halfEdge = halfEdge;
  };

  Face.prototype.getHalfEdge = function () {
    return this.halfEdge;
  };

  module.exports = Face;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.HalfEdge = mod.exports;
  }
})(this, function (module) {
  "use strict";

  function HalfEdge() {
    this.nextHalfEdge = undefined; // points to the next halfedge around the current face (CCW)
    this.flipHalfEdge = undefined; // points to the other halfedge associated with this edge
    this.vertex = undefined; // points to the vertex at the "tail" of this halfedge
    this.edge = undefined; // points to the edge associated with this halfedge
    this.face = undefined; // points to the face containing this halfedge  
  };

  HalfEdge.prototype.setVertex = function (vertex) {
    this.vertex = vertex;
  };

  HalfEdge.prototype.getVertex = function () {
    return this.vertex;
  };

  HalfEdge.prototype.setFace = function (face) {
    this.face = face;
  };

  HalfEdge.prototype.getFace = function () {
    return this.face;
  };

  HalfEdge.prototype.setEdge = function (edge) {
    this.edge = edge;
  };

  HalfEdge.prototype.getEdge = function () {
    return this.edge;
  };

  HalfEdge.prototype.setNextHalfEdge = function (nextHalfEdge) {
    this.nextHalfEdge = nextHalfEdge;
  };

  HalfEdge.prototype.getNextHalfEdge = function () {
    return this.nextHalfEdge;
  };

  HalfEdge.prototype.setFlipHalfEdge = function (flipHalfEdge) {
    this.flipHalfEdge = flipHalfEdge;
  };

  HalfEdge.prototype.getFlipHalfEdge = function () {
    return this.flipHalfEdge;
  };

  HalfEdge.prototype.onBoundary = function () {
    if (this.getFlipHalfEdge()) {
      return false;
    }
    return true;
  };

  module.exports = HalfEdge;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './Vertex', './Edge', './HalfEdge', './Face'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./Vertex'), require('./Edge'), require('./HalfEdge'), require('./Face'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.Vertex, global.Edge, global.HalfEdge, global.Face);
    global.Mesh = mod.exports;
  }
})(this, function (module, _glMatrix, _Vertex, _Edge, _HalfEdge, _Face) {
  'use strict';

  var Vertex = _interopRequireWildcard(_Vertex);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Face = _interopRequireWildcard(_Face);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function Mesh() {
    this.halfEdges = []; // Half - check;
    this.vertices = []; // Vert - check
    this.edges = []; // Edge - check
    this.faces = []; // Face - check
    this.boundaries = []; // Face - not done

    this.positions = []; // For Faster Rendering
    this.cells = []; // For Faster Rendering
    this.edgeMap = {}; // ( 1 - 3 ) <==> ( 3 - 1 )
  };

  Mesh.prototype.getFaces = function () {
    return this.faces;
  };

  Mesh.prototype.getEdges = function () {
    return this.edges;
  };

  Mesh.prototype.getEdgeMap = function () {
    return this.edgeMap;
  };

  Mesh.prototype.getVertices = function () {
    return this.vertices;
  };

  Mesh.prototype.getHalfEdges = function () {
    return this.halfEdges;
  };

  Mesh.prototype.getEdgeKey = function (vertexIndex0, vertexIndex1) {
    return vertexIndex0 + '-' + vertexIndex1;
  };

  Mesh.prototype.getEdgeKeys = function (vertexIndex0, vertexIndex1) {
    return [this.getEdgeKey(vertexIndex0, vertexIndex1), this.getEdgeKey(vertexIndex1, vertexIndex0)];
  };

  Mesh.prototype.containsEdge = function (vertexIndex0, vertexIndex1) {
    var edgeMap = this.edgeMap;
    var keys = this.getEdgeKeys(vertexIndex0, vertexIndex1);

    if (edgeMap[keys[0]] !== undefined && edgeMap[keys[1]] !== undefined) {
      return true;
    }
    return false;
  };

  Mesh.prototype.getEdge = function (vertexIndex0, vertexIndex1) {
    var edgeMap = this.edgeMap;
    var keys = this.getEdgeKeys(vertexIndex0, vertexIndex1);

    if (edgeMap[keys[0]] !== undefined && edgeMap[keys[1]] !== undefined) {
      return edgeMap[keys[0]];
    }
    return;
  };

  Mesh.prototype.setPositions = function (positions) {
    this.positions = positions;
    var len = positions.length;
    for (var i = 0; i < len; i++) {
      var vertex = new Vertex();
      vertex.setIndex(i);
      this.vertices.push(vertex);
    }
  };

  Mesh.prototype.getPositions = function () {
    var results = [];
    var vertices = this.vertices;
    var positions = this.positions;
    var len = vertices.length;
    for (var i = 0; i < len; i++) {
      var index = vertices[i].getIndex();
      results.push(positions[index]);
    }
    return results;
  };

  Mesh.prototype.setCells = function (cells) {
    this.cells = cells.slice();
    var len = cells.length;
    for (var i = 0; i < len; i++) {
      var face = new Face();
      face.setIndex(i);
      this.faces.push(face);
    }
    this.buildEdgeMap();
  };

  Mesh.prototype.getCells = function () {
    var results = [];
    var faces = this.faces;
    var vertices = this.vertices;
    var len = faces.length;
    for (var i = 0; i < len; i++) {
      var face = faces[i];
      var halfEdgeStart = halfEdge = face.getHalfEdge();
      var cell = [];
      do {
        var vertex = halfEdge.getVertex();
        var index = vertex.getIndex();
        cell.push(index);
        halfEdge = halfEdge.getNextHalfEdge();
      } while (halfEdge != halfEdgeStart);
      results.push(cell);
    }
    return results;
  };

  Mesh.prototype.buildEdgeMap = function () {
    var cells = this.cells;
    var edges = this.edges;
    var edgeMap = this.edgeMap;

    var len = cells.length;
    for (var i = 0; i < len; i++) {
      var cell = cells[i];
      var flen = cell.length;

      for (var j = 0; j < flen; j++) {
        var i0 = cell[j];
        var i1 = cell[(j + 1) % flen];

        var key0 = i0 + '-' + i1;
        var key1 = i1 + '-' + i0;

        if (edgeMap[key0] === undefined && edgeMap[key1] === undefined) {
          var edge = new Edge();
          edge.setIndex(edges.length);
          edges.push(edge);
          edgeMap[key0] = edge;
          edgeMap[key1] = edge;
        }
      }
    }
  };

  Mesh.prototype.process = function () {
    var edgeMap = this.edgeMap;
    var edges = this.edges;
    var cells = this.cells;
    var vertices = this.vertices;
    var faces = this.faces;
    var halfEdges = this.halfEdges;
    var clen = cells.length;

    for (var faceIndex = 0; faceIndex < clen; faceIndex++) {
      var cell = cells[faceIndex];
      var face = faces[faceIndex];
      var flen = cells[faceIndex].length;

      var prevHalfEdge = undefined;
      var firstHalfEdge = undefined;
      for (var vertexIndex = 0; vertexIndex < flen; vertexIndex++) {
        var vertexIndexCurr = cell[vertexIndex];
        var vertexIndexNext = cell[(vertexIndex + 1) % flen];

        var edge = edgeMap[vertexIndexCurr + '-' + vertexIndexNext];
        var vertex = vertices[vertexIndexCurr];

        //Set Half Edge Properties
        var halfedge = new HalfEdge();
        halfedge.setVertex(vertex);
        halfedge.setFace(face);
        halfedge.setEdge(edge);

        if (edge.getHalfEdge()) {
          halfedge.setFlipHalfEdge(edge.getHalfEdge());
          edge.getHalfEdge().setFlipHalfEdge(halfedge);
        } else {
          edge.setHalfEdge(halfedge);
        }

        if (prevHalfEdge !== undefined) {
          prevHalfEdge.setNextHalfEdge(halfedge);
        }
        prevHalfEdge = halfedge;

        if (vertexIndex === 0) {
          firstHalfEdge = halfedge;
        }
        halfEdges.push(halfedge);
        //Set Vertex Properties
        vertex.setHalfEdge(halfedge);
      }
      //Set Face Properties
      face.setHalfEdge(firstHalfEdge);
      prevHalfEdge.setNextHalfEdge(firstHalfEdge);
    }
  };

  module.exports = Mesh;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix);
    global.Vertex = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  function Vertex() {
    this.halfEdge = undefined;
    this.index = -1;
  };

  Vertex.prototype.setIndex = function (index) {
    this.index = index;
  };

  Vertex.prototype.getIndex = function () {
    return this.index;
  };

  Vertex.prototype.setHalfEdge = function (halfEdge) {
    this.halfEdge = halfEdge;
  };

  Vertex.prototype.getHalfEdge = function () {
    return this.halfEdge;
  };

  module.exports = Vertex;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "./../Core/Mesh"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("./../Core/Mesh"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh);
    global.Profile = mod.exports;
  }
})(this, function (module, _Mesh) {
  "use strict";

  var Mesh = _interopRequireWildcard(_Mesh);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (profile) {
    if (profile.length < 0 || profile[0].length < 2) {
      throw "profile must be a non-zero array of atleast 3 2D positions [ [ x0, y0 ], [ x1, y1 ], [ x2, y2 ] ]";
    }

    var mesh = new Mesh();
    var positions = [];
    var frontFace = [];
    var backFace = [];

    var len = profile.length;
    for (var i = 0; i < len; i++) {
      positions.push([profile[i][0], profile[i][1], 0.0]);
      frontFace.push(i);
      backFace.push(len - 1 - i);
    }
    var cells = [frontFace, backFace];

    mesh = new Mesh();
    mesh.setPositions(positions);
    mesh.setCells(cells);
    mesh.process();
    return mesh;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.EdgeIntegrity = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (edge) {
    var passed = true;
    if (edge.getIndex() === -1) {
      console.log('edge: ', edge.getIndex(), ' does not have a proper index');
      passed = false;
    }
    if (edge.getHalfEdge() === undefined) {
      console.log('edge: ', edge.getIndex(), ' does not have a half edge');
      passed = false;
    }
    return passed;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.FaceIntegrity = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (face) {
    var passed = true;
    if (face.getIndex() === -1) {
      console.log('face: ', face.getIndex(), ' does not have a proper index');
      passed = false;
    }
    if (face.getHalfEdge() === undefined) {
      console.log('face: ', face.getIndex(), ' does not have a half edge');
      passed = false;
    }
    return passed;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Queries/HalfEdgePrev'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Queries/HalfEdgePrev'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.HalfEdgePrev);
    global.HalfEdgeIntegrity = mod.exports;
  }
})(this, function (module, _HalfEdgePrev) {
  'use strict';

  var HalfEdgePrev = _interopRequireWildcard(_HalfEdgePrev);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (halfEdge) {
    var passed = true;
    var he = halfEdge;
    if (he.getNextHalfEdge() === undefined) {
      console.log('halfEdge: does not have a next half edge');
      passed = false;
    }
    if (he.getFlipHalfEdge() === undefined) {
      console.log('halfEdge: does not have a flip half edge');
      passed = false;
    }
    if (he.getVertex() === undefined) {
      console.log('halfEdge: does not have a valid vertex');
      passed = false;
    }
    if (he.getEdge() === undefined) {
      console.log('halfEdge: does not have an edge');
      passed = false;
    }
    if (he.getFace() === undefined) {
      console.log('halfEdge: does not have a face');
      passed = false;
    }
    return passed;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './FaceIntegrity', './EdgeIntegrity', './VertexIntegrity', './HalfEdgeIntegrity'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./FaceIntegrity'), require('./EdgeIntegrity'), require('./VertexIntegrity'), require('./HalfEdgeIntegrity'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.FaceIntegrity, global.EdgeIntegrity, global.VertexIntegrity, global.HalfEdgeIntegrity);
    global.Integrity = mod.exports;
  }
})(this, function (module, _FaceIntegrity, _EdgeIntegrity, _VertexIntegrity, _HalfEdgeIntegrity) {
  'use strict';

  var FaceIntegrity = _interopRequireWildcard(_FaceIntegrity);

  var EdgeIntegrity = _interopRequireWildcard(_EdgeIntegrity);

  var VertexIntegrity = _interopRequireWildcard(_VertexIntegrity);

  var HalfEdgeIntegrity = _interopRequireWildcard(_HalfEdgeIntegrity);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var Integrity = {};

  Integrity.checkMesh = function (mesh) {
    var passed = true;
    if (!this.checkFaces(mesh.getFaces())) {
      console.log('faces are messed up');
      passed = false;
    }

    if (!this.checkEdges(mesh.getEdges())) {
      console.log('edges are messed up');
      passed = false;
    }

    if (!this.checkVertices(mesh.getVertices())) {
      console.log('vertices are messed up');
      passed = false;
    }

    if (!this.checkHalfEdges(mesh.getHalfEdges())) {
      console.log('half edges are messed up');
      passed = false;
    }

    console.log('mesh is valid!');
    return passed;
  };

  Integrity.checkEdges = function (edges) {
    var passed = true;
    var len = edges.length;
    for (var i = 0; i < len; i++) {
      var edge = edges[i];
      passed = EdgeIntegrity(edge);
    }
    return passed;
  };

  Integrity.checkFaces = function (faces) {
    var passed = true;
    var len = faces.length;
    for (var i = 0; i < len; i++) {
      var face = faces[i];
      passed = FaceIntegrity(face);
    }
    return passed;
  };

  Integrity.checkVertices = function (vertices) {
    var passed = true;
    var len = vertices.length;
    for (var i = 0; i < len; i++) {
      var vertex = vertices[i];
      passed = VertexIntegrity(vertex);
    }
    return passed;
  };

  Integrity.checkHalfEdges = function (halfEdges) {
    var passed = true;
    var len = halfEdges.length;
    for (var i = 0; i < len; i++) {
      var halfedge = halfEdges[i];
      passed = HalfEdgeIntegrity(halfedge);
    }
    return passed;
  };

  module.exports = Integrity;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Integrity'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Integrity'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Integrity);
    global.MeshIntegrity = mod.exports;
  }
})(this, function (module, _Integrity) {
  'use strict';

  var Integrity = _interopRequireWildcard(_Integrity);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var passed = true;
    console.log('checking faces');
    if (!Integrity.checkFaces(mesh.getFaces())) {
      console.log('faces are messed up');
      passed = false;
    }

    console.log('checking edges');
    if (!Integrity.checkEdges(mesh.getEdges())) {
      console.log('edges are messed up');
      passed = false;
    }

    console.log('checking vertices');
    if (!Integrity.checkVertices(mesh.getVertices())) {
      console.log('vertices are messed up');
      passed = false;
    }

    console.log('checking halfedges');
    if (!Integrity.checkHalfEdges(mesh.getHalfEdges())) {
      console.log('half edges are messed up');
      passed = false;
    }

    console.log('mesh is valid!');
    return passed;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.VertexIntegrity = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (vertex) {
    var passed = true;
    if (vertex.getIndex() === -1) {
      console.log('vertex : ', vertex.getIndex(), ' does not have a proper index');
      passed = false;
    }
    if (vertex.getHalfEdge() === undefined) {
      console.log('vertex : ', vertex.getIndex(), ' does not have a half edge');
      passed = false;
    }
    return passed;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Queries/VertexNeighbors', './../Queries/FaceVertices', './../Queries/FaceHalfEdges', './../Queries/VertexHalfEdges', './InsertVertex', './InsertEdge', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Queries/VertexNeighbors'), require('./../Queries/FaceVertices'), require('./../Queries/FaceHalfEdges'), require('./../Queries/VertexHalfEdges'), require('./InsertVertex'), require('./InsertEdge'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.VertexNeighbors, global.FaceVertices, global.FaceHalfEdges, global.VertexHalfEdges, global.InsertVertex, global.InsertEdge, global.glMatrix);
    global.CatmullClark = mod.exports;
  }
})(this, function (module, _VertexNeighbors, _FaceVertices, _FaceHalfEdges, _VertexHalfEdges, _InsertVertex, _InsertEdge, _glMatrix) {
  'use strict';

  var VertexNeighbors = _interopRequireWildcard(_VertexNeighbors);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

  var InsertVertex = _interopRequireWildcard(_InsertVertex);

  var InsertEdge = _interopRequireWildcard(_InsertEdge);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var newPositions = [];
    var positions = mesh.positions;
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      newPositions.push(_glMatrix.vec3.clone(positions[i]));
    }

    var tmp = _glMatrix.vec3.create();
    var newPos = _glMatrix.vec3.create();
    //calculate new original vertex positions
    var vertices = mesh.getVertices();
    var vlen = vertices.length;
    var kmap = {};

    for (var i = 0; i < 32; i++) {
      var beta = 3.0 / (2.0 * i);
      var rho = 1.0 / (4.0 * i);
      kmap[i] = [1.0 - beta - rho, beta / i, rho / i];
    }

    for (var i = 0; i < vlen; i++) {
      var vertex = vertices[i];
      var vertexIndex = vertex.getIndex();
      var vertexPos = positions[vertexIndex];

      var neighbors = VertexHalfEdges(vertex);
      var nlen = neighbors.length;

      var kernel = kmap[nlen];
      _glMatrix.vec3.copy(newPos, vertexPos);
      _glMatrix.vec3.scale(newPos, newPos, kernel[0]);

      for (var j = 0; j < nlen; j++) {
        var he = neighbors[j];

        var hen = he.getNextHalfEdge();
        var v0iPos = positions[hen.getVertex().getIndex()];
        _glMatrix.vec3.scaleAndAdd(newPos, newPos, v0iPos, kernel[1]);

        var henn = hen.getNextHalfEdge();
        var v1iPos = positions[henn.getVertex().getIndex()];
        _glMatrix.vec3.scaleAndAdd(newPos, newPos, v1iPos, kernel[2]);
      }
      _glMatrix.vec3.copy(newPositions[vertexIndex], newPos);
    }

    //Calculate Face Verts
    var faceVerticesPosHash = {};
    var faces = mesh.getFaces();
    var flen = faces.length;
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      var faceVertices = FaceVertices(face);
      var vlen = faceVertices.length;
      var faceVertexPos = _glMatrix.vec3.create();
      faceVerticesPosHash[face.getIndex()] = faceVertexPos;

      for (var j = 0; j < vlen; j++) {
        var vertex = faceVertices[j];
        var vertexIndex = vertex.getIndex();
        var vertexPos = positions[vertexIndex];
        _glMatrix.vec3.scaleAndAdd(faceVertexPos, faceVertexPos, vertexPos, 1.0 / 4.0);
      }
    }

    //Calculate Edge Verts
    var edgeVerticesPosHash = {};
    var edges = mesh.getEdges();
    var elen = edges.length;
    for (var i = 0; i < elen; i++) {
      var edge = edges[i];

      var edgeVertexPos = _glMatrix.vec3.create();
      edgeVerticesPosHash[edge.getIndex()] = edgeVertexPos;

      var he = edge.getHalfEdge();
      var heVertex = he.getVertex();
      var heVertexPos = positions[heVertex.getIndex()];
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, heVertexPos, 6.0 / 16.0);

      var heVertexPos0 = positions[he.getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];
      var heVertexPos1 = positions[he.getNextHalfEdge().getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];

      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, heVertexPos0, 1.0 / 16.0);
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, heVertexPos1, 1.0 / 16.0);

      var hef = he.getFlipHalfEdge();
      var hefVertex = hef.getVertex();
      var hefVertexPos = positions[hefVertex.getIndex()];
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, hefVertexPos, 6.0 / 16.0);

      var hefVertexPos0 = positions[hef.getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];
      var hefVertexPos1 = positions[hef.getNextHalfEdge().getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];

      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, hefVertexPos0, 1.0 / 16.0);
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, hefVertexPos1, 1.0 / 16.0);
    }

    // console.log( edgeVerticesPosHash );
    // insert edges and set vertex positions


    for (var i = 0; i < elen; i++) {
      var edge = edges[i];
      var edgeIndex = edge.getIndex();
      InsertVertex(mesh, edge.getIndex(), edgeVerticesPosHash[edgeIndex]);
    }

    var edgeVertices = {};
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      edgeVertices[face.getIndex()] = [];
      var vertices = FaceVertices(face);
      var vlen = vertices.length;
      for (var j = 0; j < vlen; j++) {
        var vertex = vertices[j];
        var neighbors = VertexNeighbors(vertex);
        if (neighbors.length == 2) {
          edgeVertices[face.getIndex()].push(vertex);
        }
      }
    }

    var keys = Object.keys(edgeVertices);
    for (var i = 0; i < keys.length; i++) {
      var faceIndex = keys[i];
      var vertices = edgeVertices[faceIndex];
      var v0 = vertices[0];
      var v1 = vertices[1];
      var v2 = vertices[2];
      var v3 = vertices[3];
      var result = InsertEdge(mesh, v0.getIndex(), v2.getIndex());
      var cv = InsertVertex(mesh, result.edge.getIndex(), faceVerticesPosHash[faceIndex]);
      edgeVertices[faceIndex].push(cv);
      InsertEdge(mesh, v1.getIndex(), cv.getIndex());
      InsertEdge(mesh, v3.getIndex(), cv.getIndex());
    }

    for (var i = 0; i < plen; i++) {
      _glMatrix.vec3.copy(positions[i], newPositions[i]);
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Mesh', './../Core/Vertex', './../Core/Edge', './../Core/HalfEdge', './../Core/Face', './../Queries/FaceHalfEdges', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Mesh'), require('./../Core/Vertex'), require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Core/Face'), require('./../Queries/FaceHalfEdges'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh, global.Vertex, global.Edge, global.HalfEdge, global.Face, global.FaceHalfEdges, global.glMatrix);
    global.Combine = mod.exports;
  }
})(this, function (module, _Mesh, _Vertex, _Edge, _HalfEdge, _Face, _FaceHalfEdges, _glMatrix) {
  'use strict';

  var Mesh = _interopRequireWildcard(_Mesh);

  var Vertex = _interopRequireWildcard(_Vertex);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Face = _interopRequireWildcard(_Face);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh, other) {
    var meshPositions = mesh.positions;
    var mplen = meshPositions.length;
    var meshVerticies = mesh.getVertices();
    var mvlen = meshVerticies.length;
    var meshFaces = mesh.getFaces();
    var mflen = meshFaces.length;
    var meshEdges = mesh.getEdges();
    var melen = meshEdges.length;
    var meshEdgeMap = mesh.getEdgeMap();

    var otherPositions = other.positions;
    var oplen = otherPositions.length;
    var otherVertices = other.getVertices();
    var ovlen = otherVertices.length;

    var otherCells = other.getCells();
    var oclen = otherCells.length;

    for (var i = 0; i < oplen; i++) {
      var v = new Vertex();
      v.setIndex(meshVerticies.length);
      meshVerticies.push(v);
      var p = _glMatrix.vec3.clone(otherPositions[i]);
      meshPositions.push(p);
    }

    for (var i = 0; i < oclen; i++) {
      var cell = otherCells[i];
      var clen = cell.length;
      var face = new Face();
      face.setIndex(meshFaces.length);
      meshFaces.push(face);
      var lhe = undefined;
      var hes = [];
      for (var j = 0; j < clen; j++) {
        var i0 = mvlen + cell[j];
        var i1 = mvlen + cell[(j + 1) % clen];

        var vertex = meshVerticies[i0];
        var edge = mesh.getEdge(i0, i1);
        var hasEdge = edge ? true : false;
        var he = new HalfEdge();

        if (!hasEdge) {
          edge = new Edge();
          edge.setIndex(meshEdges.length);
          edge.setHalfEdge(he);
          meshEdges.push(edge);
          var keys = mesh.getEdgeKeys(i0, i1);
          meshEdgeMap[keys[0]] = edge;
          meshEdgeMap[keys[1]] = edge;
        } else {
          var hef = edge.getHalfEdge();
          hef.setFlipHalfEdge(he);
          he.setFlipHalfEdge(hef);
        }

        //he
        he.setFace(face);
        he.setEdge(edge);

        he.setVertex(vertex);
        if (lhe) {
          lhe.setNextHalfEdge(he);
        }
        hes.push(he);
        lhe = he;

        //vertex
        vertex.setHalfEdge(he);
      }
      face.setHalfEdge(lhe);
      lhe.setNextHalfEdge(hes[0]);
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Edge', './../Core/HalfEdge', './../Core/Face'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Core/Face'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Edge, global.HalfEdge, global.Face);
    global.CreateFace = mod.exports;
  }
})(this, function (module, _Edge, _HalfEdge, _Face) {
  'use strict';

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Face = _interopRequireWildcard(_Face);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh, vertices, face) {
    var meshEdgeMap = mesh.getEdgeMap();
    var meshFaces = mesh.getFaces();
    var meshHalfEdges = mesh.getHalfEdges();
    var meshEdges = mesh.getEdges();

    if (!face) {
      face = new Face();
      face.setIndex(meshFaces.length);
    }

    var vlen = vertices.length;
    var hel;
    var hes = [];
    for (var i = 0; i < vlen; i++) {
      var v0 = vertices[i];
      var v1 = vertices[(i + 1) % vlen];
      var i0 = v0.getIndex();
      var i1 = v1.getIndex();

      var he = new HalfEdge();
      var edge = mesh.getEdge(i0, i1);
      if (edge) {
        var het = edge.getHalfEdge();
        var hetv = het.getVertex();
        if (hetv == v0) {
          he = het;
        } else {
          he.setFlipHalfEdge(het);
          het.setFlipHalfEdge(he);
        }
      } else {
        edge = new Edge();
        var keys = mesh.getEdgeKeys(i0, i1);
        edge.setIndex(meshEdges.length);
        meshEdges.push(edge);
        edge.setHalfEdge(he);
        meshEdgeMap[keys[0]] = edge;
        meshEdgeMap[keys[1]] = edge;
      }

      //he
      he.setEdge(edge);
      he.setFace(face);
      he.setVertex(v0);
      if (hel) {
        hel.setNextHalfEdge(he);
      }

      //v
      v0.setHalfEdge(he);

      hes.push(he);
      hel = he;
      meshHalfEdges.push(he);
    }
    face.setHalfEdge(hes[0]);
    hel.setNextHalfEdge(hes[0]);
    return face;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Face', './../Core/Edge', './../Core/HalfEdge', './../Queries/HalfEdgePrev'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Face'), require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Queries/HalfEdgePrev'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Face, global.Edge, global.HalfEdge, global.HalfEdgePrev);
    global.DeleteEdge = mod.exports;
  }
})(this, function (module, _Face, _Edge, _HalfEdge, _HalfEdgePrev) {
  'use strict';

  var Face = _interopRequireWildcard(_Face);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var HalfEdgePrev = _interopRequireWildcard(_HalfEdgePrev);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh, edgeIndex) {
    var edges = mesh.getEdges();
    var edge = edges[edgeIndex];

    var edgeHalfEdge = edge.getHalfEdge();
    var edgeHalfEdgePrev = HalfEdgePrev(edgeHalfEdge);
    var edgeHalfEdgeNext = edgeHalfEdge.getNextHalfEdge();
    var edgeHalfEdgeVertex = edgeHalfEdge.getVertex();
    var edgeHalfEdgeFace = edgeHalfEdge.getFace();

    var edgeHalfEdgeFlip = edgeHalfEdge.getFlipHalfEdge();
    var edgeHalfEdgeFlipPrev = HalfEdgePrev(edgeHalfEdgeFlip);
    var edgeHalfEdgeFlipNext = edgeHalfEdgeFlip.getNextHalfEdge();
    var edgeHalfEdgeFlipVertex = edgeHalfEdgeFlip.getVertex();
    var edgeHalfEdgeFlipFace = edgeHalfEdgeFlip.getFace();

    // Set Face Half Edge
    edgeHalfEdgeFace.setHalfEdge(edgeHalfEdgeNext);
    //Set Half Edge Face Properties
    edgeHalfEdgePrev.setNextHalfEdge(edgeHalfEdgeFlipNext);
    edgeHalfEdgeVertex.setHalfEdge(edgeHalfEdgeFlipNext);

    // Set Half Edge Flip Face Properties
    edgeHalfEdgeFlipPrev.setNextHalfEdge(edgeHalfEdgeNext);
    edgeHalfEdgeFlipVertex.setHalfEdge(edgeHalfEdgeNext);

    // Remove Half Edge Flip Face
    var faces = mesh.getFaces();
    faces.splice(edgeHalfEdgeFlipFace.getIndex(), 1);
    var flen = faces.length;
    for (var i = 0; i < flen; i++) {
      faces[i].setIndex(i);
    }

    // Remove Edge from Edges Array
    edges.splice(edgeIndex, 1);
    var elen = edges.length;
    for (var i = 0; i < elen; i++) {
      edges[i].setIndex(i);
    }

    // Remove Edge from Edge Hash Map
    var keys = mesh.getEdgeKeys(edgeHalfEdgeVertex.getIndex(), edgeHalfEdgeFlipVertex.getIndex());
    var edgeMap = mesh.getEdgeMap();
    delete edgeMap[keys[0]];
    delete edgeMap[keys[1]];
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Mesh', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Mesh'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh, global.glMatrix);
    global.Duplicate = mod.exports;
  }
})(this, function (module, _Mesh, _glMatrix) {
  'use strict';

  var Mesh = _interopRequireWildcard(_Mesh);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var newMesh = new Mesh();
    var newPositions = [];
    var positions = mesh.getPositions();
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      newPositions.push(_glMatrix.vec3.clone(positions[i]));
    }
    newMesh.setPositions(newPositions);
    newMesh.setCells(mesh.getCells());
    newMesh.process();
    return newMesh;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Vertex', './../Core/Edge', './../Core/HalfEdge', './../Core/Face', './../Queries/FaceHalfEdges', './../Queries/MeshCentroid', 'guf', 'cga', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Vertex'), require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Core/Face'), require('./../Queries/FaceHalfEdges'), require('./../Queries/MeshCentroid'), require('guf'), require('cga'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Vertex, global.Edge, global.HalfEdge, global.Face, global.FaceHalfEdges, global.MeshCentroid, global.guf, global.cga, global.glMatrix);
    global.Extrude = mod.exports;
  }
})(this, function (module, _Vertex, _Edge, _HalfEdge, _Face, _FaceHalfEdges, _MeshCentroid, _guf, _cga, _glMatrix) {
  'use strict';

  var Vertex = _interopRequireWildcard(_Vertex);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Face = _interopRequireWildcard(_Face);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var MeshCentroid = _interopRequireWildcard(_MeshCentroid);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var zAxis = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);

  module.exports = function (mesh, faceIndex, distance, scale) {
    var meshVerts = mesh.getVertices();
    var meshHalfEdges = mesh.getHalfEdges();
    var meshEdges = mesh.getEdges();
    var meshEdgeMap = mesh.getEdgeMap();
    var meshFaces = mesh.getFaces();
    var meshPositions = mesh.positions;

    var originalFace = meshFaces[faceIndex];
    var faceHalfEdges = FaceHalfEdges(originalFace);
    var flen = faceHalfEdges.length;
    var originalVertices = [];
    for (var i = 0; i < flen; i++) {
      var he = faceHalfEdges[i];
      var vertex = he.getVertex();
      var vertexIndex = vertex.getIndex();
      originalVertices.push(vertex);
    }

    var vlen = originalVertices.length;
    var v0 = meshPositions[originalVertices[0].getIndex()];
    var v1 = meshPositions[originalVertices[1].getIndex()];
    var v2 = meshPositions[originalVertices[2].getIndex()];

    var normal = (0, _guf.calculateNormal)(v0, v1, v2);
    var faceOri = _glMatrix.quat.create();
    _glMatrix.quat.rotationTo(faceOri, normal, zAxis);

    var newVertices = [];
    var polygon = [];
    var indicies = [];
    var zOffset = 0.0;
    for (var j = 0; j < vlen; j++) {
      var vertex = originalVertices[j];
      var vertexIndex = vertex.getIndex();
      var vertexPos = _glMatrix.vec3.clone(meshPositions[vertexIndex]);
      _glMatrix.vec3.transformQuat(vertexPos, vertexPos, faceOri);
      zOffset = vertexPos[2];
      polygon.push([vertexPos[0], vertexPos[1]]);
      indicies.push(vertexIndex);
      newVertices.push(new Vertex());
    }
    // console.log( zOffset );

    _glMatrix.quat.rotationTo(faceOri, zAxis, normal);

    var results = (0, _cga.expandPolygon2)(polygon, -(scale ? scale : 0.00001));

    var rlen = results.length;
    var newPositions = [];
    var newEdges = [];
    var newHalfEdges = [];

    zOffset += distance != undefined ? distance : 0.0;

    for (var i = 0; i < rlen; i++) {
      var pos = results[i];
      var vpos = _glMatrix.vec3.fromValues(pos[0], pos[1], zOffset);
      _glMatrix.vec3.transformQuat(vpos, vpos, faceOri);
      // vec3.add( vpos, vpos, [0,0,zOffset]);
      newPositions.push(vpos);
      var vertex = newVertices[i];
      vertex.setIndex(meshPositions.length);
      meshPositions.push(vpos);
      meshVerts.push(vertex);
    }

    var lhe = undefined;
    var lhef = undefined;
    for (var i = 0; i < rlen; i++) {
      var f = originalFace;
      var v = newVertices[i];
      var vn = newVertices[(i + 1) % rlen];

      var e = new Edge();
      var he = new HalfEdge();
      var hef = new HalfEdge();

      //he
      he.setFlipHalfEdge(hef);
      he.setEdge(e);
      he.setVertex(v);
      he.setFace(f);
      meshHalfEdges.push(he);
      //hef
      hef.setFlipHalfEdge(he);
      hef.setEdge(e);
      hef.setVertex(vn);
      meshHalfEdges.push(hef);

      //e
      e.setIndex(meshEdges.length);
      e.setHalfEdge(he);
      meshEdges.push(e);
      var keys = mesh.getEdgeKeys(v.getIndex(), vn.getIndex());
      meshEdgeMap[keys[0]] = e;
      meshEdgeMap[keys[1]] = e;

      //v
      v.setHalfEdge(he);
      newEdges.push(e);
      newHalfEdges.push(he);

      if (lhe) {
        lhe.setNextHalfEdge(he);
        hef.setNextHalfEdge(lhef);
      }
      lhe = he;
      lhef = hef;
    }

    var he = newHalfEdges[0];
    var hef = he.getFlipHalfEdge();
    lhe.setNextHalfEdge(he);
    hef.setNextHalfEdge(lhef);
    originalFace.setHalfEdge(he);

    var newFaces = [];
    var holeHalfEdges = [];
    var lf = undefined;
    var lhe = undefined;

    for (var i = 0; i < rlen; i++) {
      var v = newVertices[i];
      var vo = originalVertices[i];
      var heo = v.getHalfEdge();
      var heof = heo.getFlipHalfEdge();

      var ofhe = faceHalfEdges[i];
      var li = i - 1;
      li = li < 0 ? rlen + li : li;
      var ofhep = faceHalfEdges[li];

      var f = new Face();
      var e = new Edge();
      var he = new HalfEdge();
      var hef = new HalfEdge();

      //he
      he.setFlipHalfEdge(hef);
      he.setNextHalfEdge(ofhe);
      he.setEdge(e);
      he.setVertex(v);
      he.setFace(f);

      //hef
      hef.setFlipHalfEdge(he);
      hef.setNextHalfEdge(heof.getNextHalfEdge());
      hef.setEdge(e);
      hef.setVertex(vo);
      hef.setFace(lf);

      //e
      e.setIndex(meshEdges.length);
      meshEdges.push(e);
      e.setHalfEdge(he);

      //f
      f.setIndex(meshFaces.length);
      f.setHalfEdge(he);
      meshFaces.push(f);
      newFaces.push(f);

      //vo
      vo.setHalfEdge(hef);

      //old connections
      heof.setNextHalfEdge(he);
      heof.setFace(f);
      ofhe.setFace(f);
      ofhep.setNextHalfEdge(hef);

      holeHalfEdges.push(he);
      lf = f;
    }

    var he = holeHalfEdges[0];
    var hef = he.getFlipHalfEdge();
    hef.setFace(newFaces[newFaces.length - 1]);

    // //didn't work for more than 1
    // for( var i = 0; i < rlen; i++ ) {
    //   var vn0 = newVertices[ i ];
    //   var vn1 = newVertices[ ( i + 1 ) % rlen ];
    //
    //   var vo0 = originalVertices[ i ];
    //   var vo1 = originalVertices[ ( i + 1 ) % rlen ];
    //
    //   meshFaces.push( createFace( mesh, [ vo0, vo1, vn1, vn0 ] ) );
    // }

    return originalFace;
  };

  function createFace(mesh, vertices, face) {
    var meshEdgeMap = mesh.getEdgeMap();
    var meshFaces = mesh.getFaces();
    var meshHalfEdges = mesh.getHalfEdges();
    var meshEdges = mesh.getEdges();

    if (!face) {
      face = new Face();
      face.setIndex(meshFaces.length);
    }

    var vlen = vertices.length;
    var lhe;
    var hes = [];
    for (var i = 0; i < vlen; i++) {
      var v0 = vertices[i];
      var v1 = vertices[(i + 1) % vlen];
      var i0 = v0.getIndex();
      var i1 = v1.getIndex();

      var he = new HalfEdge();
      var edge = mesh.getEdge(i0, i1);
      if (edge) {
        var het = edge.getHalfEdge();
        var hetv = het.getVertex();
        if (hetv == v0) {
          he = het;
        } else {
          he.setFlipHalfEdge(het);
          het.setFlipHalfEdge(he);
        }
      } else {
        edge = new Edge();
        var keys = mesh.getEdgeKeys(i0, i1);
        edge.setIndex(meshEdges.length);
        meshEdges.push(edge);
        edge.setHalfEdge(he);
        meshEdgeMap[keys[0]] = edge;
        meshEdgeMap[keys[1]] = edge;
      }

      //he
      he.setEdge(edge);
      he.setFace(face);
      he.setVertex(v0);
      if (lhe) {
        lhe.setNextHalfEdge(he);
      }
      hes.push(he);
      lhe = he;
      meshHalfEdges.push(he);
    }
    face.setHalfEdge(lhe);
    lhe.setNextHalfEdge(hes[0]);
    return face;
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Face', './../Core/Edge', './../Core/HalfEdge', './../Queries/HalfEdgePrev', './../Queries/VertexHalfEdges'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Face'), require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Queries/HalfEdgePrev'), require('./../Queries/VertexHalfEdges'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Face, global.Edge, global.HalfEdge, global.HalfEdgePrev, global.VertexHalfEdges);
    global.InsertEdge = mod.exports;
  }
})(this, function (module, _Face, _Edge, _HalfEdge, _HalfEdgePrev, _VertexHalfEdges) {
  'use strict';

  var Face = _interopRequireWildcard(_Face);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var HalfEdgePrev = _interopRequireWildcard(_HalfEdgePrev);

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh, startVertexIndex, endVertexIndex) {
    // console.log( 'faceIndex:', faceIndex );
    // console.log( 'startVertexIndex:', startVertexIndex );
    // console.log( 'endVertexIndex:', endVertexIndex );

    if (startVertexIndex === endVertexIndex) {
      throw 'illegal edge inseration: ' + startVertexIndex + ' , ' + endVertexIndex;
    }

    var edges = mesh.getEdges();
    var halfEdges = mesh.getHalfEdges();
    var edgeMap = mesh.getEdgeMap();
    var vertices = mesh.getVertices();
    var faces = mesh.getFaces();
    var edge = mesh.getEdge(startVertexIndex, endVertexIndex);

    if (edge) {
      // console.log( 'mesh already contains edge: ', mesh.getEdgeKeys( startVertexIndex, endVertexIndex ) );
      return; //{ edge: edge, face: faces[ edge.getHalfEdge().getFace().getIndex() ] };
    }

    var startVertex = vertices[startVertexIndex];
    var endVertex = vertices[endVertexIndex];

    var cfaces = commonFaces(startVertex, endVertex);
    var clen = cfaces.length;

    var halfEdgeA, halfEdgeB, halfEdgeC, halfEdgeD;

    for (var i = 0; i < clen; i++) {
      var face = faces[cfaces[i]];
      var faceHalfEdge = face.getHalfEdge();
      var he = faceHalfEdge;
      do {
        var vertexIndex = he.getVertex().getIndex();
        // var vertexIndexNext = hef.getVertex().getIndex();

        if (vertexIndex === startVertexIndex) {
          halfEdgeA = he;
        }

        if (vertexIndex === endVertexIndex) {
          halfEdgeC = he;
        }

        he = he.getNextHalfEdge();
      } while (he != faceHalfEdge);

      if (halfEdgeC != undefined || halfEdgeA != undefined) {
        break;
      }

      halfEdgeC = undefined;
      halfEdgeA = undefined;
    }

    // console.log( halfEdgeC );
    // console.log( halfEdgeA );
    halfEdgeB = HalfEdgePrev(halfEdgeC);
    halfEdgeD = HalfEdgePrev(halfEdgeA);

    if (halfEdgeA === undefined || halfEdgeB === undefined || halfEdgeC === undefined || halfEdgeD === undefined) {
      throw 'error finding neighboring half edges when inserting edge';
    }

    // Set New Edge Properties
    var newEdge = new Edge();
    newEdge.setIndex(edges.length);
    var edgeKeys = mesh.getEdgeKeys(startVertexIndex, endVertexIndex);
    edgeMap[edgeKeys[0]] = newEdge;
    edgeMap[edgeKeys[1]] = newEdge;
    edges.push(newEdge);

    var newFace = new Face();
    newFace.setIndex(faces.length);
    faces.push(newFace);

    //create new half edges
    var newHalfEdgeAB = new HalfEdge();
    var newHalfEdgeCD = new HalfEdge();

    newHalfEdgeAB.setNextHalfEdge(halfEdgeA);
    newHalfEdgeAB.setFlipHalfEdge(newHalfEdgeCD);
    newHalfEdgeAB.setVertex(endVertex);
    newHalfEdgeAB.setEdge(newEdge);
    newHalfEdgeAB.setFace(face);
    halfEdges.push(newHalfEdgeAB);

    newHalfEdgeCD.setNextHalfEdge(halfEdgeC);
    newHalfEdgeCD.setFlipHalfEdge(newHalfEdgeAB);
    newHalfEdgeCD.setVertex(startVertex);
    newHalfEdgeCD.setEdge(newEdge);
    newHalfEdgeCD.setFace(newFace);
    halfEdges.push(newHalfEdgeCD);

    //set all other edge & halfedge & face properties so they are accurate
    newEdge.setHalfEdge(newHalfEdgeAB);
    face.setHalfEdge(newHalfEdgeAB);
    newFace.setHalfEdge(newHalfEdgeCD);
    halfEdgeD.setNextHalfEdge(newHalfEdgeCD);
    halfEdgeB.setNextHalfEdge(newHalfEdgeAB);
    setHalfEdgeLoopFace(newHalfEdgeCD, newFace);
    setHalfEdgeLoopFace(newHalfEdgeAB, face);
    return { edge: newEdge, face: newFace };
  };

  function commonFaces(vertex0, vertex1) {
    var results = {};
    var hes0 = VertexHalfEdges(vertex0);
    var hes0l = hes0.length;
    var hes1 = VertexHalfEdges(vertex1);
    var hes1l = hes1.length;

    for (var i = 0; i < hes0l; i++) {
      var he0f = hes0[i].getFace();
      for (var j = 0; j < hes1l; j++) {
        var he1f = hes1[j].getFace();
        if (he0f.getIndex() === he1f.getIndex()) {
          results[he0f.getIndex()] = he1f;
        }
      }
    }
    return Object.keys(results);
  }

  function setHalfEdgeLoopFace(he, face) {
    var starthe = he;
    do {
      he.setFace(face);
      he = he.getNextHalfEdge();
    } while (he != starthe);
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Face', './../Core/Edge', './../Core/Vertex', './../Core/HalfEdge', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Face'), require('./../Core/Edge'), require('./../Core/Vertex'), require('./../Core/HalfEdge'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Face, global.Edge, global.Vertex, global.HalfEdge, global.glMatrix);
    global.InsertVertex = mod.exports;
  }
})(this, function (module, _Face, _Edge, _Vertex, _HalfEdge, _glMatrix) {
  'use strict';

  var Face = _interopRequireWildcard(_Face);

  var Edge = _interopRequireWildcard(_Edge);

  var Vertex = _interopRequireWildcard(_Vertex);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh, edgeIndex, position) {
    // when you create a new vertex
    // you create a new edge
    // you create two new half edges
    // you create a new vertex
    var edges = mesh.getEdges();
    var halfEdges = mesh.getHalfEdges();
    var edgeMap = mesh.getEdgeMap();
    var vertices = mesh.getVertices();
    var positions = mesh.positions; //hack fix this <-

    var originalEdge = edges[edgeIndex];
    var originalHalfEdge = originalEdge.getHalfEdge();
    var originalHalfEdgeFace = originalHalfEdge.getFace();
    var originalHalfEdgeNext = originalHalfEdge.getNextHalfEdge();
    var originalHalfEdgeFlip = originalHalfEdge.getFlipHalfEdge();

    var originalVertex = originalHalfEdge.getVertex();
    var originalVertexIndex = originalVertex.getIndex();
    var originalVertexPosition = positions[originalVertexIndex];

    var originalVertexNext = originalHalfEdgeNext.getVertex();
    var originalVertexNextIndex = originalVertexNext.getIndex();
    var originalVertexNextPosition = positions[originalVertexNextIndex];

    var newEdge = new Edge();
    var newVertex = new Vertex();
    var newHalfEdge = new HalfEdge();
    var newHalfEdgeFlip = new HalfEdge();

    //Set New Vertex Properties
    var newVertexIndex = positions.length;
    var newVertexPosition = _glMatrix.vec3.create();
    if (position !== undefined) {
      _glMatrix.vec3.copy(newVertexPosition, position);
    } else {
      _glMatrix.vec3.add(newVertexPosition, originalVertexPosition, originalVertexNextPosition);
      _glMatrix.vec3.scale(newVertexPosition, newVertexPosition, 0.5);
    }

    newVertex.setIndex(newVertexIndex);
    newVertex.setHalfEdge(newHalfEdge);
    positions.push(newVertexPosition);
    vertices.push(newVertex);

    //Set New Half Edge Properties
    newHalfEdge.setVertex(newVertex);
    newHalfEdge.setFace(originalHalfEdgeFace);
    newHalfEdge.setNextHalfEdge(originalHalfEdgeNext);
    newHalfEdge.setFlipHalfEdge(originalHalfEdgeFlip);
    newHalfEdge.setEdge(newEdge);

    // Set Original Half Edge Properties
    originalHalfEdge.setNextHalfEdge(newHalfEdge);
    originalHalfEdge.setFlipHalfEdge(newHalfEdgeFlip);

    //fix Edge map
    var originalEdgeKey0Old = originalVertexIndex + '-' + originalVertexNextIndex;
    var originalEdgeKey1Old = originalVertexNextIndex + '-' + originalVertexIndex;
    delete edgeMap[originalEdgeKey0Old]; //deletes edge key
    delete edgeMap[originalEdgeKey1Old]; //deletes edge key

    var originalEdgeKey0New = originalVertexIndex + '-' + newVertexIndex;
    var originalEdgeKey1New = newVertexIndex + '-' + originalVertexIndex;

    edgeMap[originalEdgeKey0New] = originalEdge;
    edgeMap[originalEdgeKey1New] = originalEdge;

    newEdge.setIndex(edges.length);
    edges.push(newEdge);
    newEdge.setHalfEdge(newHalfEdge);

    var newEdgeKey0 = newVertexIndex + '-' + originalVertexNextIndex;
    var newEdgeKey1 = originalVertexNextIndex + '-' + newVertexIndex;

    edgeMap[newEdgeKey0] = newEdge;
    edgeMap[newEdgeKey1] = newEdge;

    // Set original half edge flip properties

    var originalHalfEdgeFlipFace = originalHalfEdgeFlip.getFace();
    var originalHalfEdgeFlipNext = originalHalfEdgeFlip.getNextHalfEdge();
    originalHalfEdgeFlip.setNextHalfEdge(newHalfEdgeFlip);
    originalHalfEdgeFlip.setFlipHalfEdge(newHalfEdge);
    originalHalfEdgeFlip.setEdge(newEdge);

    newHalfEdgeFlip.setNextHalfEdge(originalHalfEdgeFlipNext);
    newHalfEdgeFlip.setFlipHalfEdge(originalHalfEdge);
    newHalfEdgeFlip.setVertex(newVertex);
    newHalfEdgeFlip.setEdge(originalEdge);
    newHalfEdgeFlip.setFace(originalHalfEdgeFlipFace);
    halfEdges.push(newHalfEdgeFlip);

    return newVertex;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Mesh', './../Queries/FaceHalfEdges', './../Queries/FaceVertices', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Mesh'), require('./../Queries/FaceHalfEdges'), require('./../Queries/FaceVertices'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh, global.FaceHalfEdges, global.FaceVertices, global.glMatrix);
    global.Invert = mod.exports;
  }
})(this, function (module, _Mesh, _FaceHalfEdges, _FaceVertices, _glMatrix) {
  'use strict';

  var Mesh = _interopRequireWildcard(_Mesh);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var faces = mesh.getFaces();
    var flen = faces.length;
    for (var i = 0; i < flen; i++) {
      var hes = FaceHalfEdges(faces[i]);
      var vts = FaceVertices(faces[i]);
      var hlen = hes.length;
      for (var j = 0; j < hlen; j++) {
        var i0 = j;
        var i1 = (j + 1) % hlen;

        var v0 = vts[i0];
        var v1 = vts[i1];

        var h0 = hes[i0];
        var h1 = hes[i1];
        h1.setNextHalfEdge(h0);
        h0.setVertex(v1);
        v1.setHalfEdge(h0);
      }
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './../Queries/FaceVertices', './../Queries/VertexNeighbors', './InsertVertex', './InsertEdge'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./../Queries/FaceVertices'), require('./../Queries/VertexNeighbors'), require('./InsertVertex'), require('./InsertEdge'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.FaceVertices, global.VertexNeighbors, global.InsertVertex, global.InsertEdge);
    global.Loop = mod.exports;
  }
})(this, function (module, _glMatrix, _FaceVertices, _VertexNeighbors, _InsertVertex, _InsertEdge) {
  'use strict';

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var VertexNeighbors = _interopRequireWildcard(_VertexNeighbors);

  var InsertVertex = _interopRequireWildcard(_InsertVertex);

  var InsertEdge = _interopRequireWildcard(_InsertEdge);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var positions = mesh.positions;
    var plen = positions.length;
    var newPositions = [];
    for (var i = 0; i < plen; i++) {
      newPositions.push(_glMatrix.vec3.create());
    }

    var vertices = mesh.getVertices();
    var vlen = vertices.length;
    var beta;
    for (var i = 0; i < vlen; i++) {
      var vertex = vertices[i];
      var vertexIndex = vertex.getIndex();
      var vertexPos = positions[vertexIndex];
      var newPos = newPositions[vertexIndex];

      var neighbors = VertexNeighbors(vertex);
      var nlen = neighbors.length;

      if (nlen === 3) {
        beta = 3.0 / 16.0;
      } else if (nlen > 3) {
        beta = (5.0 / 8.0 - Math.pow(0.375 + 0.25 * Math.cos(Math.PI * 2.0 / nlen), 2.0)) / nlen;
      }

      _glMatrix.vec3.scaleAndAdd(newPos, newPos, vertexPos, 1.0 - nlen * beta);

      for (var j = 0; j < nlen; j++) {
        var neighborPos = positions[neighbors[j].getIndex()];
        _glMatrix.vec3.scaleAndAdd(newPos, newPos, neighborPos, beta);
      }
    }

    var edges = mesh.getEdges();
    var len = edges.length;
    var newVerts = [];
    var vertexAdjacentFactor = 0.375;
    var vertexOppositeFactor = 0.125;

    var newPos = _glMatrix.vec3.create();
    for (var i = 0; i < len; i++) {
      _glMatrix.vec3.set(newPos, 0, 0, 0);
      var edge = edges[i];
      var halfEdge = edge.getHalfEdge();
      var halfEdgeFlip = halfEdge.getFlipHalfEdge();
      var halfEdgeTop = halfEdge.getNextHalfEdge().getNextHalfEdge();
      var halfEdgeFlipTop = halfEdgeFlip.getNextHalfEdge().getNextHalfEdge();

      var halfEdgeVertex = halfEdge.getVertex();
      var halfEdgeFlipVertex = halfEdgeFlip.getVertex();
      var halfEdgeTopVertex = halfEdgeTop.getVertex();
      var halfEdgeFlipTopVertex = halfEdgeFlipTop.getVertex();

      var halfEdgeVertexPos = positions[halfEdgeVertex.getIndex()];
      var halfEdgeFlipVertexPos = positions[halfEdgeFlipVertex.getIndex()];
      var halfEdgeTopVertexPos = positions[halfEdgeTopVertex.getIndex()];
      var halfEdgeFlipTopVertexPos = positions[halfEdgeFlipTopVertex.getIndex()];

      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeVertexPos, vertexAdjacentFactor);
      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeFlipVertexPos, vertexAdjacentFactor);
      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeTopVertexPos, vertexOppositeFactor);
      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeFlipTopVertexPos, vertexOppositeFactor);

      newVerts.push(InsertVertex(mesh, edge.getIndex(), newPos));
    }

    var faces = mesh.getFaces();
    var flen = faces.length;
    var result;
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      var vertices = FaceVertices(face);
      var vlen = vertices.length;

      var v1 = vertices[1];
      var v3 = vertices[3];
      var v5 = vertices[5];

      result = InsertEdge(mesh, v1.getIndex(), v3.getIndex());
      result = InsertEdge(mesh, v3.getIndex(), v5.getIndex());
      result = InsertEdge(mesh, v5.getIndex(), v1.getIndex());
    }

    for (var i = 0; i < plen; i++) {
      _glMatrix.vec3.copy(positions[i], newPositions[i]);
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Mesh', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Mesh'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh, global.glMatrix);
    global.Move = mod.exports;
  }
})(this, function (module, _Mesh, _glMatrix) {
  'use strict';

  var Mesh = _interopRequireWildcard(_Mesh);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var tmp = _glMatrix.vec3.create();

  module.exports = function (mesh, displacement) {
    _glMatrix.vec3.set(tmp, 0.0, 0.0, 0.0);
    var positions = mesh.positions;
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      var pos = positions[i];
      _glMatrix.vec3.subtract(pos, pos, displacement);
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Vertex', './../Core/Edge', './../Core/HalfEdge', './../Core/Face', './../Queries/FaceHalfEdges', './../Queries/FaceVertices', './../Queries/HalfEdgePrev', './CreateFace'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Vertex'), require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Core/Face'), require('./../Queries/FaceHalfEdges'), require('./../Queries/FaceVertices'), require('./../Queries/HalfEdgePrev'), require('./CreateFace'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Vertex, global.Edge, global.HalfEdge, global.Face, global.FaceHalfEdges, global.FaceVertices, global.HalfEdgePrev, global.CreateFace);
    global.Pipe = mod.exports;
  }
})(this, function (module, _Vertex, _Edge, _HalfEdge, _Face, _FaceHalfEdges, _FaceVertices, _HalfEdgePrev, _CreateFace) {
  'use strict';

  var Vertex = _interopRequireWildcard(_Vertex);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Face = _interopRequireWildcard(_Face);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var HalfEdgePrev = _interopRequireWildcard(_HalfEdgePrev);

  var createFace = _interopRequireWildcard(_CreateFace);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh, faceIndex0, faceIndex1, vertexOffset) {
    var meshFaces = mesh.getFaces();

    var f0 = meshFaces[faceIndex0];
    var f0HalfEdges = FaceHalfEdges(f0);
    var f0Vertices = FaceVertices(f0);
    var f0len = f0Vertices.length;

    var f1 = meshFaces[faceIndex1];
    var f1HalfEdges = FaceHalfEdges(f1);
    var f1Vertices = FaceVertices(f1);
    var f1len = f1Vertices.length;

    if (f0len != f1len) {
      throw 'faces do not have the same number of vertices, can not create pipe';
    }

    var faces = [f0, f1];
    var offset = vertexOffset != undefined ? vertexOffset : 2;
    for (var i = 0; i < f0len; i++) {

      var v0i0 = i - offset;
      v0i0 = v0i0 >= f0len ? v0i0 % f0len : v0i0;
      v0i0 = v0i0 < 0 ? f0len + v0i0 : v0i0;
      var v0i1 = (i + 1) % f0len - offset;
      v0i1 = v0i1 >= f0len ? v0i1 % f0len : v0i1;
      v0i1 = v0i1 < 0 ? f0len + v0i1 : v0i1;

      var v1i0 = (f0len - i) % f0len;
      var v1i1 = f0len - (i + 1);
      var oldFace = faces[i];
      var inputFace = oldFace ? true : false;
      var result = createFace(mesh, [f0Vertices[v0i0], f0Vertices[v0i1], f1Vertices[v1i1], f1Vertices[v1i0]], oldFace);

      if (!inputFace) {
        meshFaces.push(result);
      }
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './../Queries/VertexNeighbors', './../Queries/FaceVertices', './InsertVertex', './InsertEdge'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./../Queries/VertexNeighbors'), require('./../Queries/FaceVertices'), require('./InsertVertex'), require('./InsertEdge'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.VertexNeighbors, global.FaceVertices, global.InsertVertex, global.InsertEdge);
    global.QuadSubdivide = mod.exports;
  }
})(this, function (module, _glMatrix, _VertexNeighbors, _FaceVertices, _InsertVertex, _InsertEdge) {
  'use strict';

  var VertexNeighbors = _interopRequireWildcard(_VertexNeighbors);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var InsertVertex = _interopRequireWildcard(_InsertVertex);

  var InsertEdge = _interopRequireWildcard(_InsertEdge);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var edges = mesh.getEdges();
    var elen = edges.length;
    var edgeVertices = {};

    for (var i = 0; i < elen; i++) {
      var edge = edges[i];
      InsertVertex(mesh, edge.getIndex());
    }

    var faces = mesh.getFaces();
    var flen = faces.length;
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      edgeVertices[face.getIndex()] = [];
      var vertices = FaceVertices(face);
      var vlen = vertices.length;
      for (var j = 0; j < vlen; j++) {
        var vertex = vertices[j];
        var neighbors = VertexNeighbors(vertex);
        if (neighbors.length == 2) {
          edgeVertices[face.getIndex()].push(vertex);
        }
      }
    }

    var keys = Object.keys(edgeVertices);
    for (var i = 0; i < keys.length; i++) {
      var faceIndex = keys[i];
      var vertices = edgeVertices[faceIndex];
      var v0 = vertices[0];
      var v1 = vertices[1];
      var v2 = vertices[2];
      var v3 = vertices[3];
      var result = InsertEdge(mesh, v0.getIndex(), v2.getIndex());
      var cv = InsertVertex(mesh, result.edge.getIndex());
      edgeVertices[faceIndex].push(cv);
      InsertEdge(mesh, v1.getIndex(), cv.getIndex());
      InsertEdge(mesh, v3.getIndex(), cv.getIndex());
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Queries/MeshCentroid', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Queries/MeshCentroid'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.MeshCentroid, global.glMatrix);
    global.Scale = mod.exports;
  }
})(this, function (module, _MeshCentroid, _glMatrix) {
  'use strict';

  var MeshCentroid = _interopRequireWildcard(_MeshCentroid);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var tmp = _glMatrix.vec3.create();

  module.exports = function (mesh, scale) {
    if (scale.constructor != Array) {
      scale = [scale, scale, scale];
    }
    _glMatrix.vec3.set(tmp, 0.0, 0.0, 0.0);
    var centroid = MeshCentroid(mesh);
    var positions = mesh.positions;
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      var pos = positions[i];
      _glMatrix.vec3.subtract(pos, pos, centroid);
      _glMatrix.vec3.multiply(pos, pos, scale);
      _glMatrix.vec3.add(pos, pos, centroid);
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Queries/FaceVertices', 'guf', 'cga', 'gl-matrix', './InsertEdge'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Queries/FaceVertices'), require('guf'), require('cga'), require('gl-matrix'), require('./InsertEdge'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.FaceVertices, global.guf, global.cga, global.glMatrix, global.InsertEdge);
    global.Triangulate = mod.exports;
  }
})(this, function (module, _FaceVertices, _guf, _cga, _glMatrix, _InsertEdge) {
  'use strict';

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var InsertEdge = _interopRequireWildcard(_InsertEdge);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    // console.log( 'starting triangulation' );
    var positions = mesh.positions;
    var faces = mesh.getFaces();
    var flen = faces.length;
    var zAxis = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);
    var res = {};
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      var vertices = FaceVertices(face);
      var vlen = vertices.length;
      if (vlen === 3) {
        continue;
      }

      var v0 = positions[vertices[0].getIndex()];
      var v1 = positions[vertices[1].getIndex()];
      var v2 = positions[vertices[2].getIndex()];

      var normal = (0, _guf.calculateNormal)(v0, v1, v2);
      var faceOri = _glMatrix.quat.create();
      _glMatrix.quat.rotationTo(faceOri, normal, zAxis);

      var polygon = [];
      var indicies = [];
      for (var j = 0; j < vlen; j++) {
        var vertex = vertices[j];
        var vertexIndex = vertex.getIndex();
        var vertexPos = _glMatrix.vec3.clone(positions[vertexIndex]);
        _glMatrix.vec3.transformQuat(vertexPos, vertexPos, faceOri);
        polygon.push([vertexPos[0], vertexPos[1]]);
        indicies.push(vertexIndex);
      }

      var results = (0, _cga.triangulatePolygon2)(polygon);
      var rlen = results.length;
      for (var k = 0; k < rlen; k++) {
        var result = results[k];

        var i1 = indicies[result[1]];
        var i2 = indicies[result[2]];

        InsertEdge(mesh, i1, i2);
      }
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Vertex', './../Queries/FaceHalfEdges', './../Queries/FaceVertices', './../Queries/VertexHalfEdges', './CreateFace', 'guf', 'cga', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Vertex'), require('./../Queries/FaceHalfEdges'), require('./../Queries/FaceVertices'), require('./../Queries/VertexHalfEdges'), require('./CreateFace'), require('guf'), require('cga'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Vertex, global.FaceHalfEdges, global.FaceVertices, global.VertexHalfEdges, global.CreateFace, global.guf, global.cga, global.glMatrix);
    global.Wireframe = mod.exports;
  }
})(this, function (module, _Vertex, _FaceHalfEdges, _FaceVertices, _VertexHalfEdges, _CreateFace, _guf, _cga, _glMatrix) {
  'use strict';

  var Vertex = _interopRequireWildcard(_Vertex);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

  var CreateFace = _interopRequireWildcard(_CreateFace);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var tmp = _glMatrix.vec3.create();
  var tmp2 = _glMatrix.vec3.create();
  var p0p1 = _glMatrix.vec3.create();
  var p2p1 = _glMatrix.vec3.create();

  var zAxis = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);

  module.exports = function (mesh, offset, depth) {
    var meshPositions = mesh.positions;
    var meshVertices = mesh.getVertices();
    var mvlen = meshVertices.length;

    var meshFaces = mesh.getFaces();
    var mflen = meshFaces.length;

    offset = offset != undefined ? offset : 1.0;
    depth = depth != undefined ? depth : offset;

    for (var i = 0; i < mvlen; i++) {
      var vertex = meshVertices[i];
      var vertexPosition = meshPositions[vertex.getIndex()];
      var vertexHalfEdges = VertexHalfEdges(vertex);
      var hlen = vertexHalfEdges.length;
      _glMatrix.vec3.set(tmp, 0, 0, 0);
      for (var j = 0; j < hlen; j++) {
        var h0 = vertexHalfEdges[j];
        var h1 = vertexHalfEdges[(j + 1) % hlen];

        var h0n = h0.getNextHalfEdge();
        var h1n = h1.getNextHalfEdge();

        var v0 = h0n.getVertex();
        var v1 = h1n.getVertex();

        var p0 = meshPositions[v0.getIndex()];
        var p1 = meshPositions[v1.getIndex()];

        (0, _guf.cross)(tmp2, p0, vertexPosition, p1);
        _glMatrix.vec3.add(tmp, tmp, tmp2);
      }

      _glMatrix.vec3.normalize(tmp, tmp);
      _glMatrix.vec3.scale(tmp, tmp, depth);
      var newPosition = _glMatrix.vec3.create();
      _glMatrix.vec3.add(newPosition, vertexPosition, tmp);

      var vertex = new Vertex();
      vertex.setIndex(meshVertices.length);
      meshVertices.push(vertex);
      meshPositions.push(newPosition);
    }

    for (var k = 0; k < mflen; k++) {
      var face = meshFaces[k];
      var faceVertices = FaceVertices(face);
      var vlen = faceVertices.length;
      var v0 = meshPositions[faceVertices[0].getIndex()];
      var v1 = meshPositions[faceVertices[1].getIndex()];
      var v2 = meshPositions[faceVertices[2].getIndex()];

      var normal = (0, _guf.calculateNormal)(v0, v1, v2);
      var faceOri = _glMatrix.quat.create();
      _glMatrix.quat.rotationTo(faceOri, normal, zAxis);

      var newFaceVertices = [];
      var polygon = [];
      var zOffset = 0.0;
      for (var j = 0; j < vlen; j++) {
        var vertex = faceVertices[j];
        var vertexIndex = vertex.getIndex();
        var vertexPos = _glMatrix.vec3.clone(meshPositions[vertexIndex]);
        _glMatrix.vec3.transformQuat(vertexPos, vertexPos, faceOri);
        zOffset = vertexPos[2];
        polygon.push([vertexPos[0], vertexPos[1]]);
        newFaceVertices.push(new Vertex());
      }

      _glMatrix.quat.rotationTo(faceOri, zAxis, normal);

      var results = (0, _cga.expandPolygon2)(polygon, -offset);
      var rlen = results.length;

      for (var i = 0; i < rlen; i++) {
        var pos = results[i];
        var vpos = _glMatrix.vec3.fromValues(pos[0], pos[1], zOffset);
        _glMatrix.vec3.transformQuat(vpos, vpos, faceOri);
        var vertex = newFaceVertices[i];
        vertex.setIndex(meshVertices.length);
        meshPositions.push(vpos);
        meshVertices.push(vertex);
      }

      var faces = [face];
      for (var i = 0; i < vlen; i++) {
        var i0 = i;
        var i1 = (i + 1) % vlen;
        var v0 = faceVertices[i0];
        var v1 = faceVertices[i1];

        var v0e = meshVertices[v0.getIndex() + mvlen];
        var v1e = meshVertices[v1.getIndex() + mvlen];

        var v2 = newFaceVertices[i1];
        var v3 = newFaceVertices[i0];

        var f = faces[i];
        var add = f == undefined ? true : false;
        var result;

        if (depth > 0.0) {
          result = CreateFace(mesh, [v0, v1, v2, v3], f);
          meshFaces.push(CreateFace(mesh, [v0e, v3, v2, v1e]));
        } else {
          result = CreateFace(mesh, [v3, v2, v1, v0], f);
          meshFaces.push(CreateFace(mesh, [v1e, v2, v3, v0e]));
        }

        if (add) {
          meshFaces.push(result);
        }
      }
    }
  };
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["module"], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.EdgeVertices = mod.exports;
    }
})(this, function (module) {
    "use strict";

    module.exports = function (edge) {
        var results = [];
        var he = edge.getHalfEdge();
        results.push(he.getVertex());
        he = he.getFlipHalfEdge();
        results.push(he.getVertex());
        return results;
    };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.FaceHalfEdges = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (face) {
    var originalHalfEdge = he = face.getHalfEdge();
    var halfEdges = [];
    do {
      halfEdges.push(he);
      he = he.getNextHalfEdge();
    } while (he != originalHalfEdge);
    return halfEdges;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.FaceVertices = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (face) {
    var originalHalfEdge = he = face.getHalfEdge();
    var vertices = [];
    do {
      vertices.push(he.getVertex());
      he = he.getNextHalfEdge();
    } while (he != originalHalfEdge);
    return vertices;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.HalfEdgePrev = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (he) {
    var startHalfEdge = he;
    while (he.getNextHalfEdge() != startHalfEdge) {
      he = he.getNextHalfEdge();
    }
    return he;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix);
    global.MeshCentroid = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  module.exports = function (mesh) {
    var center = _glMatrix.vec3.create();
    var positions = mesh.positions;
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      _glMatrix.vec3.add(center, center, positions[i]);
    }
    _glMatrix.vec3.scale(center, center, 1.0 / plen);
    return center;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './VertexHalfEdges'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./VertexHalfEdges'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.VertexHalfEdges);
    global.VertexEdges = mod.exports;
  }
})(this, function (module, _VertexHalfEdges) {
  'use strict';

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (vertex) {
    var halfEdges = VertexHalfEdges(vertex);
    var hlen = halfEdges.length;
    var edges = [];
    for (var i = 0; i < hlen; i++) {
      edges.push(halfEdges[i].getEdge());
    }
    return edges;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.VertexFaces = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (vertex) {
    var startHalfEdge = originalHalfEdge = he = vertex.getHalfEdge();
    var faces = [];
    do {
      if (he.getNextHalfEdge() === startHalfEdge) {
        faces.push(he.getFace());
        he = he.getFlipHalfEdge();
        startHalfEdge = he;
      } else {
        he = he.getNextHalfEdge();
      }
    } while (he != originalHalfEdge);
    return faces;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.VertexHalfEdges = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (vertex) {
    var startHalfEdge = originalHalfEdge = he = vertex.getHalfEdge();
    var halfEdges = [];
    do {
      if (he.getNextHalfEdge() === startHalfEdge) {
        he = he.getFlipHalfEdge();
        startHalfEdge = he;
        halfEdges.push(he);
      } else {
        he = he.getNextHalfEdge();
      }
    } while (he != originalHalfEdge);
    return halfEdges;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.VertexNeighbors = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (vertex) {
    var startHalfEdge = originalHalfEdge = he = vertex.getHalfEdge();
    var neighbors = [];
    do {
      if (he.getNextHalfEdge() === startHalfEdge) {
        neighbors.push(he.getVertex());
        he = he.getFlipHalfEdge();
        startHalfEdge = he;
      } else {
        he = he.getNextHalfEdge();
      }
    } while (he != originalHalfEdge);
    return neighbors;
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', './../../../mhf', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('./../../../mhf'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.mhf, global.glMatrix);
    global.Angles = mod.exports;
  }
})(this, function (module, _Behavior, _mhf, _glMatrix) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  var mhf = _interopRequireWildcard(_mhf);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var map = mhf.map;

  var _symbol = { symbol: symbol };
  var subsymbol = _symbol.subsymbol;


  var c0 = _glMatrix.vec3.create();
  var d0 = _glMatrix.vec3.create();
  var c0p2 = _glMatrix.vec3.create();
  var c0p3 = _glMatrix.vec3.create();
  var c0p2xy = _glMatrix.vec3.create();
  var c0p3xy = _glMatrix.vec3.create();
  var cx = _glMatrix.vec3.create();
  var angle = 0.0;
  var delta = 0.0;
  var other = false;
  var zAxis = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);

  function r2d(r) {
    return r * 180.0 / Math.PI;
  }
  function Angles() {};

  Angles.prototype = new Behavior();
  Angles.prototype.constructor = Angles;

  Angles.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    var Angles = particle.getAngles();
    var slen = Angles.length;
    for (var i = 0; i < slen; i++) {
      var s = Angles[i];
      other = s.p2 === particle ? true : false;

      // center
      _glMatrix.vec3.add(c0, s.p0.getPrevPos(), s.p1.getPrevPos());
      _glMatrix.vec3.scale(c0, c0, 0.5);

      // axis
      _glMatrix.vec3.sub(d0, s.p0.getPrevPos(), s.p1.getPrevPos());
      _glMatrix.vec3.normalize(d0, d0);

      // vectors
      _glMatrix.vec3.subtract(c0p2, s.p2.getPrevPos(), c0);
      _glMatrix.vec3.subtract(c0p3, s.p3.getPrevPos(), c0);
      _glMatrix.vec3.normalize(c0p2, c0p2);
      _glMatrix.vec3.normalize(c0p3, c0p3);

      var ori = _glMatrix.quat.create();
      _glMatrix.quat.rotationTo(ori, d0, zAxis);

      _glMatrix.vec3.transformQuat(c0p2xy, c0p2, ori);
      _glMatrix.vec3.transformQuat(c0p3xy, c0p3, ori);

      var a = Math.atan2(c0p2xy[1], c0p2xy[0]);
      if (a < 0) {
        a = map(a, -Math.PI, 0.0, Math.PI, Math.PI * 2.0);
      }

      var b = Math.atan2(c0p3xy[1], c0p3xy[0]);
      if (b < 0) {
        b = map(b, -Math.PI, 0.0, Math.PI, Math.PI * 2.0);
      }

      if (a < b) {
        angle = b - a;
      } else {
        angle = Math.PI * 2 - (a - b);
      }

      delta = angle - s.angle;
      _glMatrix.vec3.cross(cx, c0p2, c0p3);
      if (Math.abs(delta) > _glMatrix.glMatrix) {
        // if( Math.abs( delta ) > EPSILON && other ) {
        // if( Math.abs( delta ) > EPSILON ) {

        _glMatrix.vec3.cross(cx, d0, other ? c0p2 : c0p3);
        _glMatrix.vec3.scaleAndAdd(acc, acc, cx, (other ? 1.0 - s.bias : -s.bias) * s.k * delta * this.magnitude * dt / slen);
      }
    }
  };

  module.exports = Angles;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix, global.mhf);
    global.Attractor = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix, _mhf) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var tmp = _glMatrix.vec3.create();

  function Attractor() {
    this.pos = _glMatrix.vec3.create();
    this.fallOff = 0.5;
  };

  Attractor.prototype = new Behavior();
  Attractor.prototype.constructor = Attractor;

  Attractor.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    _glMatrix.vec3.subtract(tmp, this.pos, pos);
    var length = _glMatrix.vec3.length(tmp);
    var env = (0, _mhf.gaussian)(length, this.magnitude * dt, 0.0, this.fallOff);
    _glMatrix.vec3.scaleAndAdd(acc, acc, tmp, env);
  };

  module.exports = Attractor;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Behavior = mod.exports;
  }
})(this, function (module) {
  "use strict";

  function Behavior() {
    this.enabled = true;
    this.magnitude = 1.0;
  };

  Behavior.prototype.update = function () {};

  Behavior.prototype.actUpon = function (particle, pos, vel, acc, dt) {};

  Behavior.prototype.getEnabled = function () {
    return this.enabled;
  };

  Behavior.prototype.setEnabled = function (enabled) {
    this.enabled = enabled;
  };

  Behavior.prototype.getMagnitude = function () {
    return this.magnitude;
  };

  Behavior.prototype.setMagnitude = function (magnitude) {
    this.magnitude = magnitude;
  };

  module.exports = Behavior;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix);
    global.Damper = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function Damper() {};

  Damper.prototype = new Behavior();
  Damper.prototype.constructor = Damper;

  Damper.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    _glMatrix.vec3.scaleAndAdd(acc, acc, vel, -this.magnitude * dt);
  };

  module.exports = Damper;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix);
    global.Force = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function Force(options) {
    options = options ? options : {};
    this.force = options.force ? options.force : _glMatrix.vec3.fromValues(0.0, -1.0, 0.0);
  };

  Force.prototype = new Behavior();
  Force.prototype.constructor = Force;

  Force.prototype.actUpon = function (particle, pos, vel, acc, dt) {

    _glMatrix.vec3.scaleAndAdd(acc, acc, this.force, this.magnitude * dt);
  };

  module.exports = Force;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix);
    global.Homing = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var tmp = _glMatrix.vec3.create();

  function Homing() {};

  Homing.prototype = new Behavior();
  Homing.prototype.constructor = Homing;

  Homing.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    _glMatrix.vec3.subtract(tmp, particle.getHome(), pos);
    _glMatrix.vec3.scaleAndAdd(acc, acc, tmp, this.magnitude * dt);
  };

  module.exports = Homing;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix);
    global.Springs = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var tmp = _glMatrix.vec3.create();

  function Springs() {};

  Springs.prototype = new Behavior();
  Springs.prototype.constructor = Springs;

  Springs.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    var springs = particle.getSprings();
    var slen = springs.length;
    for (var i = 0; i < slen; i++) {
      var s = springs[i];
      var other = s.p0 === particle ? s.p1 : s.p0;
      _glMatrix.vec3.subtract(tmp, particle.getPrevPos(), other.getPrevPos());
      var dist = _glMatrix.vec3.length(tmp);
      _glMatrix.vec3.normalize(tmp, tmp);
      var delta = s.length - dist;
      _glMatrix.vec3.scale(tmp, tmp, s.k * delta * this.magnitude * dt / slen);
      _glMatrix.vec3.add(acc, acc, tmp);
    }
  };

  module.exports = Springs;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix, global.mhf);
    global.Vortex = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix, _mhf) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var sp = _glMatrix.vec3.create();
  var ptOnWire = _glMatrix.vec3.create();
  var rv = _glMatrix.vec3.create();
  var rvn = _glMatrix.vec3.create();
  var f = _glMatrix.vec3.create();

  function Vortex() {
    this.startPt = _glMatrix.vec3.fromValues(0, 0, 1);
    this.endPt = _glMatrix.vec3.fromValues(0, 0, -1);
    this.se = _glMatrix.vec3.create();
    this.sen = _glMatrix.vec3.create();
    this.fallOff = 1.0;
    this.magnitude = 0.1;
  };

  Vortex.prototype = new Behavior();
  Vortex.prototype.constructor = Vortex;

  Vortex.prototype.update = function () {
    _glMatrix.vec3.subtract(this.se, this.startPt, this.endPt);
    _glMatrix.vec3.normalize(this.sen, this.se);
  };

  Vortex.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    var startPt = this.startPt;
    var se = this.se;
    var sen = this.sen;

    _glMatrix.vec3.subtract(sp, startPt, pos);
    var length = _glMatrix.vec3.dot(sp, sen);
    _glMatrix.vec3.subtract(ptOnWire, startPt, sen);
    _glMatrix.vec3.scale(ptOnWire, ptOnWire, length);
    _glMatrix.vec3.subtract(rv, pos, ptOnWire);
    var rvLength = _glMatrix.vec3.length(rv);
    _glMatrix.vec3.cross(f, rv, se);
    var env = (0, _mhf.gaussian)(rvLength, this.magnitude, 0.0, this.fallOff);
    _glMatrix.vec3.scaleAndAdd(acc, acc, f, env * dt);
  };

  module.exports = Vortex;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix);
    global.Angle = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  var cx = _glMatrix.vec3.create();
  var d0 = _glMatrix.vec3.create();
  var c0 = _glMatrix.vec3.create();
  var c0p2 = _glMatrix.vec3.create();
  var c0p3 = _glMatrix.vec3.create();

  function Angle(particle0, particle1, particle2, particle3, opts) {
    opts = opts ? opts : {};
    this.p0 = particle0;
    this.p1 = particle1;
    this.p2 = particle2;
    this.p3 = particle3;
    this.k = opts.k != undefined ? opts.k : 1.0;
    this.bias = opts.bias != undefined ? opts.bias : 0.5;
    this.angle = 0.0;
    if (opts.angle != undefined) {
      this.angle = opts.angle;
    } else {
      _glMatrix.vec3.add(c0, this.p0.getPrevPos(), this.p1.getPrevPos());
      _glMatrix.vec3.scale(c0, c0, 0.5);
      _glMatrix.vec3.subtract(c0p2, this.p2.getPrevPos(), c0);
      _glMatrix.vec3.subtract(c0p3, this.p3.getPrevPos(), c0);
      _glMatrix.vec3.normalize(c0p2, c0p2);
      _glMatrix.vec3.normalize(c0p3, c0p3);
      _glMatrix.vec3.sub(d0, this.p0.getPrevPos(), this.p1.getPrevPos());
      _glMatrix.vec3.normalize(d0, d0);
      _glMatrix.vec3.cross(cx, c0p2, c0p3);
      var c = _glMatrix.vec3.length(cx);
      var d = _glMatrix.vec3.dot(c0p2, c0p3);
      this.angle = Math.atan2(c, d);
    }
    // particle0.addAngle( this );
    // particle1.addAngle( this );
    particle2.addAngle(this);
    particle3.addAngle(this);
  };

  module.exports = Angle;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix);
    global.Particle = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  function Particle() {
    this.index = -1;
    this.fixed = false;
    this.home = _glMatrix.vec3.create();
    this.pos = _glMatrix.vec3.create();
    this.ppos = _glMatrix.vec3.create();
    this.vel = _glMatrix.vec3.create();
    this.acc = _glMatrix.vec3.create();
    this.springs = [];
    this.angles = [];
  };

  Particle.prototype.setIndex = function (index) {
    this.index = index;
  };

  Particle.prototype.setIndex = function () {
    return this.index;
  };

  Particle.prototype.getFixed = function () {
    return this.fixed;
  };

  Particle.prototype.getFixed = function () {
    return this.fixed;
  };

  Particle.prototype.setFixed = function (fixed) {
    this.fixed = fixed;
  };

  Particle.prototype.setHome = function (home) {
    _glMatrix.vec3.copy(this.home, home);
  };

  Particle.prototype.getHome = function () {
    return this.home;
  };

  Particle.prototype.setPos = function (pos) {
    _glMatrix.vec3.copy(this.pos, pos);
  };

  Particle.prototype.getPos = function () {
    return this.pos;
  };

  Particle.prototype.setPrevPos = function (ppos) {
    _glMatrix.vec3.copy(this.ppos, ppos);
  };

  Particle.prototype.getPrevPos = function () {
    return this.ppos;
  };

  Particle.prototype.setVel = function (vel) {
    _glMatrix.vec3.copy(this.vel, vel);
  };

  Particle.prototype.getVel = function () {
    return this.vel;
  };

  Particle.prototype.setAcc = function (acc) {
    _glMatrix.vec3.copy(this.acc, acc);
  };

  Particle.prototype.getAcc = function () {
    return this.acc;
  };

  Particle.prototype.addForce = function (force) {
    var acc = this.acc;
    _glMatrix.vec3.add(acc, acc, force);
  };

  Particle.prototype.addSpring = function (spring) {
    this.springs.push(spring);
  };

  Particle.prototype.getSprings = function () {
    return this.springs;
  };

  Particle.prototype.addAngle = function (angle) {
    this.angles.push(angle);
  };

  Particle.prototype.getAngles = function () {
    return this.angles;
  };

  module.exports = Particle;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './Particle', './Physics', './../Solvers/Verlet'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./Particle'), require('./Physics'), require('./../Solvers/Verlet'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.Particle, global.Physics, global.Verlet);
    global.ParticleSystem = mod.exports;
  }
})(this, function (module, _glMatrix, _Particle, _Physics, _Verlet) {
  'use strict';

  var Particle = _interopRequireWildcard(_Particle);

  var Physics = _interopRequireWildcard(_Physics);

  var Solver = _interopRequireWildcard(_Verlet);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  // import * as Solver from './../Solvers/Euler';

  function ParticleSystem(opt) {
    opt = opt ? opt : {};
    this.particles = [];
    this.positions = [];
    this.ppositions = [];
    this.velocities = [];
    this.homes = [];
    this.behaviors = [];
    this.solver = opt.solver ? opt.solver : new Solver();
    this.physics = opt.physics ? opt.physics : new Physics();
  }
  // import * as Solver from './../Solvers/RungeKutta';
  ;

  ParticleSystem.prototype.addParticle = function () {
    var particle = new Particle();
    particle.setIndex(this.particles.length);
    this.particles.push(particle);
    this.positions.push(particle.getPos());
    this.ppositions.push(particle.getPrevPos());
    this.velocities.push(particle.getVel());
    this.homes.push(particle.getHome());
    return particle;
  };

  ParticleSystem.prototype.getParticles = function () {
    return this.particles;
  };

  ParticleSystem.prototype.addBehavior = function (behavior) {
    this.behaviors.push(behavior);
  };

  ParticleSystem.prototype.getPositions = function () {
    return this.positions;
  };

  ParticleSystem.prototype.setPosition = function (particle, position) {
    var offset = particle.getIndex();
    this.positions[offset][0] = position[0];
    this.positions[offset][1] = position[1];
    this.positions[offset][2] = position[2];
  };

  ParticleSystem.prototype.getPosition = function (particle) {
    var offset = particle.getIndex();
    return this.positions[offset];
  };

  ParticleSystem.prototype.getVelocities = function () {
    return this.velocities;
  };

  ParticleSystem.prototype.setVelocity = function (particle, velocity) {
    var offset = particle.getIndex();
    this.velocities[offset][0] = velocity[0];
    this.velocities[offset][1] = velocity[1];
    this.velocities[offset][2] = velocity[2];
  };

  ParticleSystem.prototype.getVelocity = function (particle) {
    var offset = particle.getIndex();
    return this.velocities[offset];
  };

  ParticleSystem.prototype.getHomes = function () {
    return this.homes;
  };

  ParticleSystem.prototype.setHome = function (particle, home) {
    var offset = particle.getIndex();
    this.homes[offset][0] = home[0];
    this.homes[offset][1] = home[1];
    this.homes[offset][2] = home[2];
  };

  ParticleSystem.prototype.getHome = function (particle) {
    var offset = particle.getIndex();
    return this.homes[offset];
  };

  ParticleSystem.prototype.getSolver = function () {
    return this.solver;
  };

  ParticleSystem.prototype.setSolver = function (solver) {
    this.solver = solver;
  };

  ParticleSystem.prototype.update = function () {
    var behaviors = this.behaviors;
    var springs = this.springs;
    var physics = this.physics;
    var solver = this.solver;
    var particles = this.particles;

    var blen = behaviors.length;
    for (var i = 0; i < blen; i++) {
      var b = behaviors[i];
      if (b.getEnabled()) {
        b.update();
      }
    }

    var plen = particles.length;
    for (var i = 0; i < plen; i++) {
      var particle = particles[i];
      solver.update(particle, behaviors, physics);
    }
  };

  module.exports = ParticleSystem;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Physics = mod.exports;
  }
})(this, function (module) {
  "use strict";

  function Physics(opts) {
    opts = opts ? opts : {};
    this.dt = opts.dt != undefined ? opts.dt : 0.25;
    this.accLimit = opts.accLimit != undefined ? opts.accLimit : 1.5;
    this.velLimit = opts.velLimit != undefined ? opts.velLimit : 2.75;
  };

  Physics.prototype.getDt = function () {
    return this.dt;
  };

  Physics.prototype.getAccLimit = function () {
    return this.accLimit;
  };

  Physics.prototype.getVelLimit = function () {
    return this.velLimit;
  };

  module.exports = Physics;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix);
    global.Spring = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  var tmp = _glMatrix.vec3.create();

  function Spring(particle0, particle1, opts) {
    opts = opts ? opts : {};
    this.p0 = particle0;
    this.p1 = particle1;
    this.k = opts.k != undefined ? opts.k : 1.0;
    this.length = 0.0;
    if (opts.length != undefined) {
      this.length = opts.length;
    } else {
      _glMatrix.vec3.subtract(tmp, this.p0.getPos(), this.p1.getPos());
      this.length = _glMatrix.vec3.length(tmp);
    }
    particle0.addSpring(this);
    particle1.addSpring(this);
  };

  module.exports = Spring;
});
(function (global, factory) {
   if (typeof define === "function" && define.amd) {
      define(['module', 'gl-matrix'], factory);
   } else if (typeof exports !== "undefined") {
      factory(module, require('gl-matrix'));
   } else {
      var mod = {
         exports: {}
      };
      factory(mod, global.glMatrix);
      global.Derivative = mod.exports;
   }
})(this, function (module, _glMatrix) {
   'use strict';

   function Derivative() {
      this.dpdt = _glMatrix.vec3.create();
      this.dvdt = _glMatrix.vec3.create();
   };

   module.exports = Derivative;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Solver', 'gl-matrix', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Solver'), require('gl-matrix'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Solver, global.glMatrix, global.mhf);
    global.Euler = mod.exports;
  }
})(this, function (module, _Solver, _glMatrix, _mhf) {
  'use strict';

  var Solver = _interopRequireWildcard(_Solver);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function Euler() {};

  Euler.prototype = new Solver();
  Euler.prototype.constructor = Euler;

  Euler.prototype.update = function (particle, behaviors, physics) {
    if (particle.getFixed()) {
      return;
    }

    var ppos = particle.getPrevPos();
    var pos = particle.getPos();
    var vel = particle.getVel();
    var acc = particle.getAcc();
    _glMatrix.vec3.copy(ppos, pos);

    this.calculateAcceleration(particle, pos, vel, acc, physics, behaviors);
    (0, _mhf.limit3)(vel, vel, physics.velLimit);
    _glMatrix.vec3.add(vel, vel, acc);
    _glMatrix.vec3.add(pos, pos, vel);
    _glMatrix.vec3.set(acc, 0, 0, 0);
  };

  module.exports = Euler;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Solver.js', 'gl-matrix', './Derivative', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Solver.js'), require('gl-matrix'), require('./Derivative'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Solver, global.glMatrix, global.Derivative, global.mhf);
    global.RungeKutta = mod.exports;
  }
})(this, function (module, _Solver, _glMatrix, _Derivative, _mhf) {
  'use strict';

  var Solver = _interopRequireWildcard(_Solver);

  var Derivative = _interopRequireWildcard(_Derivative);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var tmpPos = _glMatrix.vec3.create();
  var tmpVel = _glMatrix.vec3.create();
  var tmpAcc = _glMatrix.vec3.create();

  function RungeKutta() {
    this.zero = new Derivative();
    this.one = new Derivative();
    this.two = new Derivative();
    this.three = new Derivative();
    this.four = new Derivative();
  };

  RungeKutta.prototype = new Solver();
  RungeKutta.prototype.constructor = RungeKutta;

  RungeKutta.prototype.evaluate = function (out, input, particle, pos, vel, acc, dt, physics, behaviors) {
    _glMatrix.vec3.scaleAndAdd(tmpPos, pos, input.dpdt, dt);
    _glMatrix.vec3.scaleAndAdd(tmpVel, vel, input.dvdt, dt);

    this.calculateAcceleration(particle, tmpPos, tmpVel, acc, physics, behaviors);
    (0, _mhf.limit3)(tmpVel, tmpVel, physics.velLimit);

    _glMatrix.vec3.copy(out.dpdt, tmpVel);
    _glMatrix.vec3.copy(out.dvdt, acc);
  };

  RungeKutta.prototype.update = function (particle, behaviors, physics) {
    if (particle.getFixed()) {
      return;
    }

    var zero = this.zero;
    var one = this.one;
    var two = this.two;
    var three = this.three;
    var four = this.four;

    var dt = physics.dt;
    var dt2 = dt * 0.5;
    var dt6 = dt / 6.0;

    var ppos = particle.getPrevPos();
    var pos = particle.getPos();
    var vel = particle.getVel();
    var acc = particle.getAcc();
    _glMatrix.vec3.copy(ppos, pos);

    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(one, zero, particle, pos, vel, tmpAcc, 0.0, physics, behaviors);
    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(two, one, particle, pos, vel, tmpAcc, dt2, physics, behaviors);
    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(three, two, particle, pos, vel, tmpAcc, dt2, physics, behaviors);
    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(four, three, particle, pos, vel, tmpAcc, dt, physics, behaviors);

    _glMatrix.vec3.copy(tmpPos, two.dpdt);
    _glMatrix.vec3.add(tmpPos, tmpPos, three.dpdt);
    _glMatrix.vec3.scale(tmpPos, tmpPos, 2.0);
    _glMatrix.vec3.add(tmpPos, tmpPos, one.dpdt);
    _glMatrix.vec3.add(tmpPos, tmpPos, four.dpdt);
    _glMatrix.vec3.scaleAndAdd(pos, pos, tmpPos, dt6);

    _glMatrix.vec3.copy(tmpVel, two.dvdt);
    _glMatrix.vec3.add(tmpVel, tmpVel, three.dvdt);
    _glMatrix.vec3.scale(tmpVel, tmpVel, 2.0);
    _glMatrix.vec3.add(tmpVel, tmpVel, one.dvdt);
    _glMatrix.vec3.add(tmpVel, tmpVel, four.dvdt);
    _glMatrix.vec3.scaleAndAdd(vel, vel, tmpVel, dt6);
    (0, _mhf.limit3)(vel, vel, physics.velLimit);
  };

  module.exports = RungeKutta;
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'gl-matrix', 'mhf'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('gl-matrix'), require('mhf'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.glMatrix, global.mhf);
        global.Solver = mod.exports;
    }
})(this, function (module, _glMatrix, _mhf) {
    'use strict';

    function Solver() {};

    Solver.prototype.update = function (particle, behaviors, physics) {};

    Solver.prototype.calculateAcceleration = function (particle, pos, vel, acc, physics, behaviors) {
        var blen = behaviors.length;
        for (var i = 0; i < blen; i++) {
            var b = behaviors[i];
            if (b.getEnabled()) {
                b.actUpon(particle, pos, vel, acc, physics.dt);
            }
        }
        (0, _mhf.limit3)(acc, acc, physics.accLimit);
    };

    module.exports = Solver;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Solver', 'gl-matrix', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Solver'), require('gl-matrix'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Solver, global.glMatrix, global.mhf);
    global.Verlet = mod.exports;
  }
})(this, function (module, _Solver, _glMatrix, _mhf) {
  'use strict';

  var Solver = _interopRequireWildcard(_Solver);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function Verlet() {};

  Verlet.prototype = new Solver();
  Verlet.prototype.constructor = Verlet;

  Verlet.prototype.update = function (particle, behaviors, physics) {
    if (particle.getFixed()) {
      return;
    }

    var dt = physics.dt;
    var ppos = particle.getPrevPos();
    var pos = particle.getPos();
    var vel = particle.getVel();
    var acc = particle.getAcc();
    _glMatrix.vec3.copy(ppos, pos);

    _glMatrix.vec3.subtract(vel, pos, ppos);
    this.calculateAcceleration(particle, pos, vel, acc, physics, behaviors);
    _glMatrix.vec3.add(vel, vel, acc);
    (0, _mhf.limit3)(vel, vel, physics.velLimit);
    _glMatrix.vec3.add(pos, pos, vel);
    _glMatrix.vec3.set(acc, 0, 0, 0);
  };

  module.exports = Verlet;
});

