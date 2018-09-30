
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.lib = {})));
}(this, (function (exports) { 'use strict';

  class MyClass {
    constructor() {
      this.value = 'void';

      this.myMethod = arg => !!arg;

      this.mySpreadMethod = (...args) => args;
    }

  }

  const obj = {};
  const myFunc = () => {};
  var index = 'Oh My!';

  exports.obj = obj;
  exports.myFunc = myFunc;
  exports.MyClass = MyClass;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib.js.map
