const assert = require('assert');
const { linearize } = require('../index')

describe('C3', function() {
  it('linearizes trivial case', function() {
    assert.deepEqual(linearize({'A': []}), {'A': ['A']})
  })

  it('linearizes single inheritance case', function() {
    assert.deepEqual(
      linearize({'A': ['B'], 'B': ['C'], 'C': []}),
      {'A': ['A', 'B', 'C'], 'B': ['B', 'C'], 'C': ['C']}
    )
  })

  it('linearizes multiple inheritance case', function() {
    assert.deepEqual(
      linearize({'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'K1': ['A', 'B', 'C'], 'K2': ['D', 'B', 'E'], 'K3': ['D', 'A'], 'Z': ['K1', 'K2', 'K3']}),
      {'A': ['A'], 'B': ['B'], 'C': ['C'], 'D': ['D'], 'E': ['E'], 'K1': ['K1', 'A', 'B', 'C'], 'K2': ['K2', 'D', 'B', 'E'], 'K3': ['K3', 'D', 'A'], 'Z': ['Z', 'K1', 'K2', 'K3', 'D', 'A', 'B', 'C', 'E']}
    )
  })
})
