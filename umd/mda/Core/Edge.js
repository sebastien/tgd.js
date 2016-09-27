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

