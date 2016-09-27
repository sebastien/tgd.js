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

