/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  distDir: ".next",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
