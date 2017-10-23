const webpack = require('webpack');
const { p, LIBRARY_FILE_NAME, LIBRARY_VAR_NAME } = require('./webpack.helpers');

module.exports = {
  context: __dirname,
  entry: {
    [LIBRARY_FILE_NAME]: p('source/index.js')
  },
  output: {
    library: LIBRARY_VAR_NAME,
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: ['last 2 versions'],
                  node: '8.4.0',
                },
              }],
            ],
            plugins: [
              'transform-flow-strip-types',
              'transform-class-properties',
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map'
};
