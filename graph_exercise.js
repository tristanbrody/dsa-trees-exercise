class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (const v of vertexArray) {
      this.nodes.add(v);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let n of this.nodes) {
      if (n.adjacent.has(vertex)) {
        n.adjacent.delete(vertex);
      }
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisit = [start];
    const result = [];
    const visited = new Set();
    visited.add(start);
    let c;
    while (toVisit.length) {
      c = toVisit.pop();
      result.push(c.value);

      c.adjacent.forEach(e => {
        if (!visited.has(e)) {
          visited.add(e);
          toVisit.push(e);
        }
      });

      // for (let e of c.adjacent) {
      //   if (!visited.has(e)) {
      //     visited.add(e);
      //     toVisit.push(e);
      //   }
      // }
    }
    return result;
  }

  // depthFirstSearch(start) {
  //   // Create an empty stack
  //   const stack = [start];
  //   const result = [];
  //   const visited = new Set();
  //   let currentVertex;

  //   // visit node
  //   visited.add(start);

  //   // while there are still neighbors to visit
  //   while (stack.length) {
  //     currentVertex = stack.pop();
  //     result.push(currentVertex.value);

  //     // visit neighbors and push onto stack
  //     currentVertex.adjacent.forEach(neighbor => {
  //       if (!visited.has(neighbor)) {
  //         visited.add(neighbor);
  //         stack.push(neighbor);
  //       }
  //     });
  //   }
  //   return result;
  // }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start, visited = [], seen = new Set()) {
    let toVisit = [start];
    visited.push(start.value);
    while (toVisit.length) {
      let c = toVisit.shift();
      if (!seen.has(c)) {
        seen.add(c);
        visited.push(c.value);
        for (let e of c.adjacent) {
          toVisit.push(e);
        }
      }
    }
    const res = [];
    for (let s of seen) {
      res.push(s.value);
    }
    return res;
  }
}

module.exports = { Graph, Node };

let graph = new Graph();
let S = new Node("S");
let P = new Node("P");
let U = new Node("U");
let X = new Node("X");
let Q = new Node("Q");
let Y = new Node("Y");
let V = new Node("V");
let R = new Node("R");
let W = new Node("W");
let T = new Node("T");

graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

var result = JSON.stringify(graph.depthFirstSearch(S));

// let graph = new Graph();
// let S = new Node("S");
// let P = new Node("P");
// let U = new Node("U");
// let X = new Node("X");
// let Q = new Node("Q");
// let Y = new Node("Y");
// let V = new Node("V");
// let R = new Node("R");
// let W = new Node("W");
// let T = new Node("T");

// graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

// graph.addEdge(S, P);
// graph.addEdge(S, U);

// graph.addEdge(P, X);
// graph.addEdge(U, X);

// graph.addEdge(P, Q);
// graph.addEdge(U, V);

// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);

// graph.addEdge(Q, R);
// graph.addEdge(Y, R);

// graph.addEdge(Y, W);
// graph.addEdge(V, W);

// graph.addEdge(R, T);
// graph.addEdge(W, T);

// graph.breadthFirstSearch(S);
