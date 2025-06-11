const { build } = require('esbuild')
const { sassPlugin } = require('esbuild-sass-plugin');

const commonOptions = {
    tsconfig: './tsconfig.json',
    minify: true,
    bundle: true,
    sourcemap: true,
    logLevel: 'info',
    plugins: [ sassPlugin() ],
    loader: {
        ".glsl": 'text'
    }
}

build({
    ...commonOptions,
    entryPoints: ['./src/webgl/webgl-index.tsx'],
    outfile: './docs/webgl-index.js',
}).catch(() => process.exit(1))