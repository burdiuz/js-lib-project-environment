'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//# sourceMappingURL=index.js.map
