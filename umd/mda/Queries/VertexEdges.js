(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './VertexHalfEdges'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./VertexHalfEdges'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.VertexHalfEdges);
    global.VertexEdges = mod.exports;
  }
})(this, function (module, _VertexHalfEdges) {
  'use strict';

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (vertex) {
    var halfEdges = VertexHalfEdges(vertex);
    var hlen = halfEdges.length;
    var edges = [];
    for (var i = 0; i < hlen; i++) {
      edges.push(halfEdges[i].getEdge());
    }
    return edges;
  };
});

