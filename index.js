'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class MyClass {
  constructor() {
    this.value = 'void';

    this.myMethod = arg => !!arg;

    this.mySpreadMethod = (...args) => args;
  }

}

const obj = {};
const myFunc = (arg1, arg2, ...list) => ({ ...arg1,
  ...arg2,
  list
});
var index = 'Oh My!';

exports.obj = obj;
exports.myFunc = myFunc;
exports.MyClass = MyClass;
exports.default = index;
//# sourceMappingURL=index.js.map
