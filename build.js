const { build } = require('esbuild')

const commonOptions = {
    tsconfig: './tsconfig.json',
    minify: true,
    bundle: true,
    sourcemap: true,
    logLevel: 'info',
    loader: {
        ".glsl": 'text'
    }
}

build({
    ...commonOptions,
    entryPoints: ['./src/webgl-index.ts'],
    outfile: './dist/webgl-index.js',
}).catch(() => process.exit(1))

build({
    ...commonOptions,
    entryPoints: ['./src/canvas-index.ts'],
    outfile: './dist/canvas-index.js',
}).catch(() => process.exit(1))

build({
    ...commonOptions,
    entryPoints: ['./src/worker.ts'],
    outfile: './dist/worker.js',
}).catch(() => process.exit(1))