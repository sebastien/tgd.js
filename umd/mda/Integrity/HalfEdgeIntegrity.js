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

