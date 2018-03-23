'use strict';

function merge(sequences) {
  let result = [];

  sequences = sequences.map(s => s.slice());

  while (sequences.length > 0) {
    let found = false;
    let head;

    for (let seq of sequences) {
      head = seq[0];

      if (!sequences.find(s => s !== seq && s.slice(1).includes(head))) {
        found = true;
        result.push(head);

        for (let seq of sequences) {
          const index = seq.indexOf(head);
          if (index > -1) {
            seq.splice(index, 1);
          }
        }

        break;
      }
    }

    sequences = sequences.filter(s => s.length > 0);

    if (!found) {
      throw new Error("cannot find C3-linearization for input");
    }
  }

  return result;
}

function _linearize(graph, head, results) {
  if (results.hasOwnProperty(head)) {
    return results[head];
  }

  if (graph[head].length === 0) {
    const res = [head];
    results[head] = res;
    return res;
  }

  let sequences = graph[head]
    .map(x => _linearize(graph, x, results))
    .concat([graph[head].slice()]);

  const res = [head].concat(merge(sequences));
  results[head] = res;
  return res;
}

function linearize(graph) {
  const results = {};
  const heads = Object.keys(graph);

  for (let head of heads) {
    _linearize(graph, head, results);
  }

  return results;
}

module.exports.linearize = linearize;
