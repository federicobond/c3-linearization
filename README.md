
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

### Important notes

*Solidity* does linearization from right to left (you write the parents from most
base-like to most derived). This is exactly the reverse as in Python, where you
put the most derived classes to the left. To get correct results with Solidity,
set the `reverse` option to true.

```javascript
linearize('A': ['B', 'C'], { reverse: true })
```

*Python* is also a bit more strict in the cases that it accepts. For accurate
Python MRO, set the `python` option to true.

```javascript
linearize('A': ['B', 'C'], { python: true })
```

## Author

Federico Bond

## License

MIT
