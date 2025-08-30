// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',            // <— tells Next to emit a static site into `out/`
    images: {unoptimized: true}, // <— required if you ever use next/image during static export
    sassOptions: {
        includePaths: ['./src/styles'],
        // NOTE: Sass doesn’t understand the `@` alias. Prefer a relative path, e.g. `@use "media" as *;`
        // If you keep this, it may fail. See the tip below.
        prependData: `@use "media" as *;`
    },
    // Optional for GitHub Pages or subfolder hosting:
    // basePath: '/your-repo',
    // assetPrefix: '/your-repo/',
    // trailingSlash: true,
};

module.exports = nextConfig;