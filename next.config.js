/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
  },

  exportTrailingSlash: true
};

module.exports = nextConfig

