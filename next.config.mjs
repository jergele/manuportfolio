/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable caching in development
  typescript: {
    ignoreBuildErrors: true,
  },
  cache: false,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
