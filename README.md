# cpp-to-js-example

## Purpose 

Introduce converting another programming language (specifically C++) 
to run in the browser by using Javascript as an "assembly" language.

## Motivation

* OpenCV is ported to Javascript? https://github.com/ucisysarch/opencvjs
* How is it ported? by using Emscripten
* There's a lot of useful "legacy" C++ code (actually under active development)
* It would be nice to have this available in the browser
* It would be nice to be able to reuse the same code in other context

## Contents

What it is:

* C++ library: main.cpp, store.h, store.cpp, Makefile
  * A simple C++ code class "Store" used to get/set and integer value
* Instructions to convert to Javascript as assembly: js/entry.cpp, js/Makefile
* An app example created using create-react-app that stores and retrieves data to the converted C++ code

## Notes

creating a C interface to access the C++ code:

```cpp
static Store* store;

extern "C" {
    void store_value(int v) {
```

em++ parameters:

```-s MODULARIZE=1 -s 'EXPORT_NAME="storejs"' ````

append to storejs:

```javascript
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = storejs;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return storejs; });
else if (typeof exports === 'object')
  exports["storejs"] = storejs;
```

importing:

```javascript
const storejs = require('storejs');
```

## additional challenges in real project:

* memory management:

```javascript
      self.bufferPtr = self.loc3d._malloc(BUFFER_BYTES);
      self.imageOnHeap = new Uint8Array(self.loc3d.HEAPU8.buffer, self.bufferPtr, BUFFER_BYTES);
```


* requires installation and setup of Emscripten 

