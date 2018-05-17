/* @flow */

class MyClass {
  value = 'void';
  myMethod = (arg: Number): Boolean => !!arg;
  mySpreadMethod = (...args): Object => args;
}

export default MyClass;
