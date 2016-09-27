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
    global.VertexFaces = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (vertex) {
    var startHalfEdge = originalHalfEdge = he = vertex.getHalfEdge();
    var faces = [];
    do {
      if (he.getNextHalfEdge() === startHalfEdge) {
        faces.push(he.getFace());
        he = he.getFlipHalfEdge();
        startHalfEdge = he;
      } else {
        he = he.getNextHalfEdge();
      }
    } while (he != originalHalfEdge);
    return faces;
  };
});

