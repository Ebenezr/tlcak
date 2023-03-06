/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
  distDir: "build",
};
const withImages = require("next-images");
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config;
  },
});
module.exports = nextConfig;
