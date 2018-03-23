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

## Author

Federico Bond

## License

MIT
