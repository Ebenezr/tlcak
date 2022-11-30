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
const withImages = require("next-images");
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config;
  },
});
module.exports = nextConfig;
