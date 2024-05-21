/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path');
// const withExportImages = require('next-export-optimize-images');

// module.exports = withExportImages({
//   trailingSlash: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     loader: 'akamai',
//     path: '/'
//   }
// })