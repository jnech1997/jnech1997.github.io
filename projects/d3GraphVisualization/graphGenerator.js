class Node {
  constructor(cx, cy) {
    this.cx= cx;
    this.cy= cy;
  }

  get getX() {
    return this.cx;
  }

  get getY() {
    return this.cy;
  }
}

var makeGraph= function (size) {
  var svgX= $('svg').css('width');
  var svgY= $('svg').css('height');
  svgX= parseInt(svgX.substring(0, svgX.length-2));
  svgY= parseInt(svgY.substring(0, svgY.length-2));
  var graph= new Map();
  var nodes= [];
  //create the list of nodes in the graph
  for (var i= 0; i < size; i++) {
    var cx= Math.floor(Math.random()*svgX);
    var cy= Math.floor(Math.random()*svgY);
    var newNode= new Node(cx, cy);
    if (!nodes.includes(newNode)) {
      nodes.push(newNode);
    }
  }
  //for each node, create a set of edges to other nodes
  for (var i in nodes) {
    var numEdges= Math.floor(Math.random()*nodes.length/4) + 1;
    edges= new Set();
    for (var e= 0; e < numEdges; e++) {
      var randNodeIndex= Math.floor(Math.random()*nodes.length);
      endNode= nodes[randNodeIndex];
      if (!edges.has(endNode)) {
        edges.add(endNode);
      }
    }
    //add the node to the graph with a corresponding set of edges
    graph.set(nodes[i], edges);
  }
  return graph;
}