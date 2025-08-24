/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false, // Enable PWA in production
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable SWC minification to fix WASM build issues on Windows
  trailingSlash: true,
  basePath: "/portfolio", // Required for GitHub Pages subdirectory deployment
  assetPrefix: "/portfolio", // Required for proper asset loading on GitHub Pages
};

module.exports = withPWA(nextConfig);
