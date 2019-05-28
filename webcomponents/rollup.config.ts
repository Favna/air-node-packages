import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    progress(),
    external(),
    postcss({
      modules: true,
      minimize: true
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs()
  ]
}
