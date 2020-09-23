
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lib = {}));
}(this, (function (exports) { 'use strict';

  class MyClass {
    constructor() {
      this.value = 'void';

      this.myMethod = arg => !!arg;

      this.mySpreadMethod = (...args) => args;
    }

  }

  MyClass.EVENT = 'MyEvent';

  const obj = {};
  const myFunc = (arg1, arg2, ...list) => ({ ...arg1,
    ...arg2,
    list
  });
  var index = 'Oh My!';

  exports.MyClass = MyClass;
  exports.default = index;
  exports.myFunc = myFunc;
  exports.obj = obj;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib.js.map
