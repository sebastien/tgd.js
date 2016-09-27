(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Vertex', './../Queries/FaceHalfEdges', './../Queries/FaceVertices', './../Queries/VertexHalfEdges', './CreateFace', 'guf', 'cga', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Vertex'), require('./../Queries/FaceHalfEdges'), require('./../Queries/FaceVertices'), require('./../Queries/VertexHalfEdges'), require('./CreateFace'), require('guf'), require('cga'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Vertex, global.FaceHalfEdges, global.FaceVertices, global.VertexHalfEdges, global.CreateFace, global.guf, global.cga, global.glMatrix);
    global.Wireframe = mod.exports;
  }
})(this, function (module, _Vertex, _FaceHalfEdges, _FaceVertices, _VertexHalfEdges, _CreateFace, _guf, _cga, _glMatrix) {
  'use strict';

  var Vertex = _interopRequireWildcard(_Vertex);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

  var CreateFace = _interopRequireWildcard(_CreateFace);

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

  var tmp = _glMatrix.vec3.create();
  var tmp2 = _glMatrix.vec3.create();
  var p0p1 = _glMatrix.vec3.create();
  var p2p1 = _glMatrix.vec3.create();

  var zAxis = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);

  module.exports = function (mesh, offset, depth) {
    var meshPositions = mesh.positions;
    var meshVertices = mesh.getVertices();
    var mvlen = meshVertices.length;

    var meshFaces = mesh.getFaces();
    var mflen = meshFaces.length;

    offset = offset != undefined ? offset : 1.0;
    depth = depth != undefined ? depth : offset;

    for (var i = 0; i < mvlen; i++) {
      var vertex = meshVertices[i];
      var vertexPosition = meshPositions[vertex.getIndex()];
      var vertexHalfEdges = VertexHalfEdges(vertex);
      var hlen = vertexHalfEdges.length;
      _glMatrix.vec3.set(tmp, 0, 0, 0);
      for (var j = 0; j < hlen; j++) {
        var h0 = vertexHalfEdges[j];
        var h1 = vertexHalfEdges[(j + 1) % hlen];

        var h0n = h0.getNextHalfEdge();
        var h1n = h1.getNextHalfEdge();

        var v0 = h0n.getVertex();
        var v1 = h1n.getVertex();

        var p0 = meshPositions[v0.getIndex()];
        var p1 = meshPositions[v1.getIndex()];

        (0, _guf.cross)(tmp2, p0, vertexPosition, p1);
        _glMatrix.vec3.add(tmp, tmp, tmp2);
      }

      _glMatrix.vec3.normalize(tmp, tmp);
      _glMatrix.vec3.scale(tmp, tmp, depth);
      var newPosition = _glMatrix.vec3.create();
      _glMatrix.vec3.add(newPosition, vertexPosition, tmp);

      var vertex = new Vertex();
      vertex.setIndex(meshVertices.length);
      meshVertices.push(vertex);
      meshPositions.push(newPosition);
    }

    for (var k = 0; k < mflen; k++) {
      var face = meshFaces[k];
      var faceVertices = FaceVertices(face);
      var vlen = faceVertices.length;
      var v0 = meshPositions[faceVertices[0].getIndex()];
      var v1 = meshPositions[faceVertices[1].getIndex()];
      var v2 = meshPositions[faceVertices[2].getIndex()];

      var normal = (0, _guf.calculateNormal)(v0, v1, v2);
      var faceOri = _glMatrix.quat.create();
      _glMatrix.quat.rotationTo(faceOri, normal, zAxis);

      var newFaceVertices = [];
      var polygon = [];
      var zOffset = 0.0;
      for (var j = 0; j < vlen; j++) {
        var vertex = faceVertices[j];
        var vertexIndex = vertex.getIndex();
        var vertexPos = _glMatrix.vec3.clone(meshPositions[vertexIndex]);
        _glMatrix.vec3.transformQuat(vertexPos, vertexPos, faceOri);
        zOffset = vertexPos[2];
        polygon.push([vertexPos[0], vertexPos[1]]);
        newFaceVertices.push(new Vertex());
      }

      _glMatrix.quat.rotationTo(faceOri, zAxis, normal);

      var results = (0, _cga.expandPolygon2)(polygon, -offset);
      var rlen = results.length;

      for (var i = 0; i < rlen; i++) {
        var pos = results[i];
        var vpos = _glMatrix.vec3.fromValues(pos[0], pos[1], zOffset);
        _glMatrix.vec3.transformQuat(vpos, vpos, faceOri);
        var vertex = newFaceVertices[i];
        vertex.setIndex(meshVertices.length);
        meshPositions.push(vpos);
        meshVertices.push(vertex);
      }

      var faces = [face];
      for (var i = 0; i < vlen; i++) {
        var i0 = i;
        var i1 = (i + 1) % vlen;
        var v0 = faceVertices[i0];
        var v1 = faceVertices[i1];

        var v0e = meshVertices[v0.getIndex() + mvlen];
        var v1e = meshVertices[v1.getIndex() + mvlen];

        var v2 = newFaceVertices[i1];
        var v3 = newFaceVertices[i0];

        var f = faces[i];
        var add = f == undefined ? true : false;
        var result;

        if (depth > 0.0) {
          result = CreateFace(mesh, [v0, v1, v2, v3], f);
          meshFaces.push(CreateFace(mesh, [v0e, v3, v2, v1e]));
        } else {
          result = CreateFace(mesh, [v3, v2, v1, v0], f);
          meshFaces.push(CreateFace(mesh, [v1e, v2, v3, v0e]));
        }

        if (add) {
          meshFaces.push(result);
        }
      }
    }
  };
});

