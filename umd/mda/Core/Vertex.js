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

