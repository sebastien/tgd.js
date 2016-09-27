(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './cross', './normalize'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./cross'), require('./normalize'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.cross, global.normalize);
    global.calculateNormal = mod.exports;
  }
})(this, function (module, _cross, _normalize) {
  'use strict';

  var cross = _interopRequireWildcard(_cross);

  var normalize = _interopRequireWildcard(_normalize);

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

  module.exports = function (a, b, c) {
    var r = [0.0, 0.0, 0.0];
    cross(r, a, b, c);
    normalize(r, r);
    return r;
  };
});

