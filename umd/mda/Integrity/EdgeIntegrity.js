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

