> ️️️️️⚠️ Notice: this package has a known issue when linearizing Solidity inheritance chains. It's being discussed at [ethereum/solidity#3856](https://github.com/ethereum/solidity/issues/3856).

c3-linearization
================

[![Build Status](https://travis-ci.org/federicobond/c3-linearization.svg?branch=master)](https://travis-ci.org/federicobond/c3-linearization)
![npm version](https://img.shields.io/npm/v/c3-linearization.svg)

A package for doing Python-style C3-linearization in ECMAScript.

## Usage

```javascript
import { linearize } from 'c3-linearization'

linearize({
  'A': ['B', 'C'],
  'B': [],
  'C': ['D'],
  'D': []
})

// {
//   'A': ['A', 'B', 'C', 'D'],
//   'B': ['B'],
//   'C': ['C', 'D'],
//   'D': ['D']
// }
```

This works well for languages like Solidity, but Python is a bit more strict
in the cases that it accepts. For Python-style MRO, set the `python` option to
true.

```javascript
linearize('A': ['B', 'C'], { python: true })
```

## Author

Federico Bond

## License

MIT
