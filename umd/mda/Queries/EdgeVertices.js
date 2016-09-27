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
        global.EdgeVertices = mod.exports;
    }
})(this, function (module) {
    "use strict";

    module.exports = function (edge) {
        var results = [];
        var he = edge.getHalfEdge();
        results.push(he.getVertex());
        he = he.getFlipHalfEdge();
        results.push(he.getVertex());
        return results;
    };
});

