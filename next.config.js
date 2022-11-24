/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};
module.exports = nextConfig;
