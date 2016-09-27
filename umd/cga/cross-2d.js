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
    global.cross2d = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a, b) {
    return a[0] * b[1] - b[0] * a[1];
  };
});

