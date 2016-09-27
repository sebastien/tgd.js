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
    global.normalize = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (out, v) {
    var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    out[0] = v[0] / length;
    out[1] = v[1] / length;
    out[2] = v[2] / length;
    return out;
  };
});

