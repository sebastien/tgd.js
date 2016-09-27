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

