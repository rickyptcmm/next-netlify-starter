/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 ini membuat static HTML
  trailingSlash: true,
};

module.exports = nextConfig;
