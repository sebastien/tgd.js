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
    global.cross = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (out, a, b, c) {
    var abx = b[0] - a[0],
        aby = b[1] - a[1],
        abz = b[2] - a[2],
        acx = c[0] - a[0],
        acy = c[1] - a[1],
        acz = c[2] - a[2];
    out[0] = aby * acz - abz * acy;
    out[1] = abz * acx - abx * acz;
    out[2] = abx * acy - aby * acx;
    return out;
  };
});

