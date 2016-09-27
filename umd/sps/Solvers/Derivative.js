(function (global, factory) {
   if (typeof define === "function" && define.amd) {
      define(['module', 'gl-matrix'], factory);
   } else if (typeof exports !== "undefined") {
      factory(module, require('gl-matrix'));
   } else {
      var mod = {
         exports: {}
      };
      factory(mod, global.glMatrix);
      global.Derivative = mod.exports;
   }
})(this, function (module, _glMatrix) {
   'use strict';

   function Derivative() {
      this.dpdt = _glMatrix.vec3.create();
      this.dvdt = _glMatrix.vec3.create();
   };

   module.exports = Derivative;
});

