(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "./../Core/Mesh"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("./../Core/Mesh"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh);
    global.Profile = mod.exports;
  }
})(this, function (module, _Mesh) {
  "use strict";

  var Mesh = _interopRequireWildcard(_Mesh);

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

  module.exports = function (profile) {
    if (profile.length < 0 || profile[0].length < 2) {
      throw "profile must be a non-zero array of atleast 3 2D positions [ [ x0, y0 ], [ x1, y1 ], [ x2, y2 ] ]";
    }

    var mesh = new Mesh();
    var positions = [];
    var frontFace = [];
    var backFace = [];

    var len = profile.length;
    for (var i = 0; i < len; i++) {
      positions.push([profile[i][0], profile[i][1], 0.0]);
      frontFace.push(i);
      backFace.push(len - 1 - i);
    }
    var cells = [frontFace, backFace];

    mesh = new Mesh();
    mesh.setPositions(positions);
    mesh.setCells(cells);
    mesh.process();
    return mesh;
  };
});

