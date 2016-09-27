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
    global.normalizeArray = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a) {
    var result = [];
    var len = a.length;
    var slen = a[0].length;
    var addZ = slen < 3 ? true : false;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < slen; j++) {
        result.push(a[i][j]);
      }
      if (addZ) {
        result.push(0.0);
      }
    }
    return result;
  };
});

