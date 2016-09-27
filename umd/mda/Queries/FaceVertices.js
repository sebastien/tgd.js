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
    global.FaceVertices = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (face) {
    var originalHalfEdge = he = face.getHalfEdge();
    var vertices = [];
    do {
      vertices.push(he.getVertex());
      he = he.getNextHalfEdge();
    } while (he != originalHalfEdge);
    return vertices;
  };
});

