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
    global.Face = mod.exports;
  }
})(this, function (module) {
  "use strict";

  function Face() {
    this.halfEdge = undefined; // points to one of the halfedges associated with this face
    this.index = -1;
  };

  Face.prototype.setIndex = function (index) {
    this.index = index;
  };

  Face.prototype.getIndex = function () {
    return this.index;
  };

  Face.prototype.setHalfEdge = function (halfEdge) {
    this.halfEdge = halfEdge;
  };

  Face.prototype.getHalfEdge = function () {
    return this.halfEdge;
  };

  module.exports = Face;
});

