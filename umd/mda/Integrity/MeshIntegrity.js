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

