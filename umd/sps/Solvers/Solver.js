(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'gl-matrix', 'mhf'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('gl-matrix'), require('mhf'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.glMatrix, global.mhf);
        global.Solver = mod.exports;
    }
})(this, function (module, _glMatrix, _mhf) {
    'use strict';

    function Solver() {};

    Solver.prototype.update = function (particle, behaviors, physics) {};

    Solver.prototype.calculateAcceleration = function (particle, pos, vel, acc, physics, behaviors) {
        var blen = behaviors.length;
        for (var i = 0; i < blen; i++) {
            var b = behaviors[i];
            if (b.getEnabled()) {
                b.actUpon(particle, pos, vel, acc, physics.dt);
            }
        }
        (0, _mhf.limit3)(acc, acc, physics.accLimit);
    };

    module.exports = Solver;
});

