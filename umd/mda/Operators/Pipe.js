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

