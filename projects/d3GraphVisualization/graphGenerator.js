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

let makeGraph= function (size) {
  let svgX= $('svg').css('width');
  let svgY= $('svg').css('height');
  svgX= parseInt(svgX.substring(0, svgX.length-2));
  svgY= parseInt(svgY.substring(0, svgY.length-2));
  let graph= new Map();
  let nodes= [];
  //create the list of nodes in the graph
  for (let i= 0; i < size; i++) {
    let cx= Math.floor(Math.random()*svgX);
    let cy= Math.floor(Math.random()*svgY);
    let newNode= new Node(cx, cy);
    if (!nodes.includes(newNode)) {
      nodes.push(newNode);
    }
  }
  //for each node, create a set of edges to other nodes
  for (let i in nodes) {
    let numEdges= Math.floor(Math.random()*nodes.length/4) + 1;
    edges= new Set();
    for (let e= 0; e < numEdges; e++) {
      let randNodeIndex= Math.floor(Math.random()*nodes.length);
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