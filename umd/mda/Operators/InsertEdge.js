(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Face', './../Core/Edge', './../Core/HalfEdge', './../Queries/HalfEdgePrev', './../Queries/VertexHalfEdges'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Face'), require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Queries/HalfEdgePrev'), require('./../Queries/VertexHalfEdges'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Face, global.Edge, global.HalfEdge, global.HalfEdgePrev, global.VertexHalfEdges);
    global.InsertEdge = mod.exports;
  }
})(this, function (module, _Face, _Edge, _HalfEdge, _HalfEdgePrev, _VertexHalfEdges) {
  'use strict';

  var Face = _interopRequireWildcard(_Face);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var HalfEdgePrev = _interopRequireWildcard(_HalfEdgePrev);

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

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

  module.exports = function (mesh, startVertexIndex, endVertexIndex) {
    // console.log( 'faceIndex:', faceIndex );
    // console.log( 'startVertexIndex:', startVertexIndex );
    // console.log( 'endVertexIndex:', endVertexIndex );

    if (startVertexIndex === endVertexIndex) {
      throw 'illegal edge inseration: ' + startVertexIndex + ' , ' + endVertexIndex;
    }

    var edges = mesh.getEdges();
    var halfEdges = mesh.getHalfEdges();
    var edgeMap = mesh.getEdgeMap();
    var vertices = mesh.getVertices();
    var faces = mesh.getFaces();
    var edge = mesh.getEdge(startVertexIndex, endVertexIndex);

    if (edge) {
      // console.log( 'mesh already contains edge: ', mesh.getEdgeKeys( startVertexIndex, endVertexIndex ) );
      return; //{ edge: edge, face: faces[ edge.getHalfEdge().getFace().getIndex() ] };
    }

    var startVertex = vertices[startVertexIndex];
    var endVertex = vertices[endVertexIndex];

    var cfaces = commonFaces(startVertex, endVertex);
    var clen = cfaces.length;

    var halfEdgeA, halfEdgeB, halfEdgeC, halfEdgeD;

    for (var i = 0; i < clen; i++) {
      var face = faces[cfaces[i]];
      var faceHalfEdge = face.getHalfEdge();
      var he = faceHalfEdge;
      do {
        var vertexIndex = he.getVertex().getIndex();
        // var vertexIndexNext = hef.getVertex().getIndex();

        if (vertexIndex === startVertexIndex) {
          halfEdgeA = he;
        }

        if (vertexIndex === endVertexIndex) {
          halfEdgeC = he;
        }

        he = he.getNextHalfEdge();
      } while (he != faceHalfEdge);

      if (halfEdgeC != undefined || halfEdgeA != undefined) {
        break;
      }

      halfEdgeC = undefined;
      halfEdgeA = undefined;
    }

    // console.log( halfEdgeC );
    // console.log( halfEdgeA );
    halfEdgeB = HalfEdgePrev(halfEdgeC);
    halfEdgeD = HalfEdgePrev(halfEdgeA);

    if (halfEdgeA === undefined || halfEdgeB === undefined || halfEdgeC === undefined || halfEdgeD === undefined) {
      throw 'error finding neighboring half edges when inserting edge';
    }

    // Set New Edge Properties
    var newEdge = new Edge();
    newEdge.setIndex(edges.length);
    var edgeKeys = mesh.getEdgeKeys(startVertexIndex, endVertexIndex);
    edgeMap[edgeKeys[0]] = newEdge;
    edgeMap[edgeKeys[1]] = newEdge;
    edges.push(newEdge);

    var newFace = new Face();
    newFace.setIndex(faces.length);
    faces.push(newFace);

    //create new half edges
    var newHalfEdgeAB = new HalfEdge();
    var newHalfEdgeCD = new HalfEdge();

    newHalfEdgeAB.setNextHalfEdge(halfEdgeA);
    newHalfEdgeAB.setFlipHalfEdge(newHalfEdgeCD);
    newHalfEdgeAB.setVertex(endVertex);
    newHalfEdgeAB.setEdge(newEdge);
    newHalfEdgeAB.setFace(face);
    halfEdges.push(newHalfEdgeAB);

    newHalfEdgeCD.setNextHalfEdge(halfEdgeC);
    newHalfEdgeCD.setFlipHalfEdge(newHalfEdgeAB);
    newHalfEdgeCD.setVertex(startVertex);
    newHalfEdgeCD.setEdge(newEdge);
    newHalfEdgeCD.setFace(newFace);
    halfEdges.push(newHalfEdgeCD);

    //set all other edge & halfedge & face properties so they are accurate
    newEdge.setHalfEdge(newHalfEdgeAB);
    face.setHalfEdge(newHalfEdgeAB);
    newFace.setHalfEdge(newHalfEdgeCD);
    halfEdgeD.setNextHalfEdge(newHalfEdgeCD);
    halfEdgeB.setNextHalfEdge(newHalfEdgeAB);
    setHalfEdgeLoopFace(newHalfEdgeCD, newFace);
    setHalfEdgeLoopFace(newHalfEdgeAB, face);
    return { edge: newEdge, face: newFace };
  };

  function commonFaces(vertex0, vertex1) {
    var results = {};
    var hes0 = VertexHalfEdges(vertex0);
    var hes0l = hes0.length;
    var hes1 = VertexHalfEdges(vertex1);
    var hes1l = hes1.length;

    for (var i = 0; i < hes0l; i++) {
      var he0f = hes0[i].getFace();
      for (var j = 0; j < hes1l; j++) {
        var he1f = hes1[j].getFace();
        if (he0f.getIndex() === he1f.getIndex()) {
          results[he0f.getIndex()] = he1f;
        }
      }
    }
    return Object.keys(results);
  }

  function setHalfEdgeLoopFace(he, face) {
    var starthe = he;
    do {
      he.setFace(face);
      he = he.getNextHalfEdge();
    } while (he != starthe);
  }
});

