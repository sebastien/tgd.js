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

