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

