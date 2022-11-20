/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/alessandroserafini-web/alessandroserafini-web.github.io/gh-pages/"
    : "",
};

module.exports = nextConfig;
