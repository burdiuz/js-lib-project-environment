const path = require('path');

const LIBRARY_FILE_NAME = 'lib'; // dummy, replace with project name
const LIBRARY_VAR_NAME = 'lib'; // dummy, replace with project name

const p = (value) => {
  return path.resolve(__dirname, value);
};

module.exports = {
  p,
  LIBRARY_FILE_NAME,
  LIBRARY_VAR_NAME
};
