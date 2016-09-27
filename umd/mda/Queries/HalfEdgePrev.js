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
    global.HalfEdgePrev = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (he) {
    var startHalfEdge = he;
    while (he.getNextHalfEdge() != startHalfEdge) {
      he = he.getNextHalfEdge();
    }
    return he;
  };
});

