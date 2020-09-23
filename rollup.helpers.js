import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import { terser } from 'rollup-plugin-terser';

export const DESTINATION_FOLDER = 'dist';

export const LIBRARY_FILE_NAME = 'lib'; // dummy, replace with project name
export const LIBRARY_VAR_NAME = 'lib'; // dummy, replace with project name

export const plugins = [
  resolve(),
  babel({
    plugins: [
      '@babel/plugin-transform-runtime',
      'babel-plugin-transform-class-properties',
    ],
    exclude: 'node_modules/**',
    babelHelpers: 'runtime',
    babelrc: false,
  }),
  commonjs(),
  json(),
  url(),
];

export const cjsConfig = {
  input: 'source/index.js',
  output: [
    {
      file: 'index.js',
      sourcemap: true,
      exports: 'named',
      format: 'cjs',
    },
  ],
  plugins,
  external: [],
};

const makeUMDConfig = (suffix = '', additionalPlugins = []) => ({
  input: 'source/index.js',
  output: [
    {
      file: `${DESTINATION_FOLDER}/${LIBRARY_FILE_NAME}${suffix}.js`,
      sourcemap: true,
      exports: 'named',
      name: LIBRARY_VAR_NAME,
      format: 'umd',
    },
  ],
  plugins: [...plugins, ...additionalPlugins],
});

export const umdConfig = makeUMDConfig();

export const umdMinConfig = makeUMDConfig('.min', [terser()]);
