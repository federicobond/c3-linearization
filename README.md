c3-linearization
================

A package for doing Python-style C3-linearization in ECMAScript.

## Usage

```javascript
import { linearize } from 'c3-linearization'

linearize({
  'A': ['B', 'C'],
  'C': ['D'],
})

// => {'A': ['A', 'B', 'C', 'D']}
```

## Author

Federico Bond

## License

MIT
