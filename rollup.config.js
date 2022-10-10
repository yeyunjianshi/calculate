import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/calculate.js',
      format: 'cjs',
      exports: 'default',
      plugins: [terser()],
    },
    {
      file: 'dist/calculate.min.js',
      format: 'iife',
      name: 'Calculate',
      plugins: [terser()],
    },
  ],
  plugins: [typescript({ compilerOptions: { target: 'es6' } })],
}
