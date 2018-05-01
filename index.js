"use strict";

const defaultOptions = {
  reverse: false,
  python: false
}

function merge(sequences) {
  let result = [];
  sequences = sequences.map(s => s.slice());

  while (sequences.length > 0) {
    let found = false;
    let head;

    for (let seq of sequences) {
      head = seq[0];

      function isBadHead(s) {
        return s !== seq && s.slice(1).includes(head);
      }

      if (!sequences.find(isBadHead)) {
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

function _linearize(graph, head, results, visiting, options) {
  if (results.hasOwnProperty(head)) {
    return results[head];
  }

  if (visiting.has(head)) {
    throw new Error('circular dependency found');
  }
  visiting.add(head);

  let parents = graph[head];

  if (!parents || parents.length === 0) {
    const res = [head];
    results[head] = res;
    return res;
  }

  if (options.reverse === true) {
    parents = parents.slice().reverse();
  }

  let sequences = parents.map(x => _linearize(graph, x, results, visiting, options));

  if (options.python === true) {
    sequences = sequences.concat([parents]);
  }

  const res = [head].concat(merge(sequences));
  results[head] = res;

  visiting.delete(head);

  return res;
}

function linearize(graph, options) {
  options = Object.assign({}, defaultOptions, options)

  const results = {};
  const visiting = new Set();
  const heads = Object.keys(graph);

  for (let head of heads) {
    _linearize(graph, head, results, visiting, options);
  }

  return results;
}

module.exports.linearize = linearize;
