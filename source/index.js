import MyClass from './MyClass';

export const obj = {};
export const myFunc = (arg1, arg2, ...list) => ({
  ...arg1,
  ...arg2,
  list,
});

export { MyClass };

export default 'Oh My!';
