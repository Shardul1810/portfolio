/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false, // Enable PWA in production
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable SWC minification to fix WASM build issues on Windows
  trailingSlash: true,
  // basePath: "", // Removed to fix config error
  // assetPrefix: "", // Removed to fix config error
};

module.exports = withPWA(nextConfig);
