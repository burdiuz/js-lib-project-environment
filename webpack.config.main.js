const webpack = require('webpack');
const path = require('path');

const p = (value) => {
  return path.resolve(__dirname, value);
};

module.exports = {
  context: __dirname,
  entry: {
    'lib': p('source/index.js')
  },
  output: {
    library: 'lib',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: p('dist'),
    publicPath: 'http://localhost:8081/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          p('source'),
          p('tests'),
        ],
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
};

