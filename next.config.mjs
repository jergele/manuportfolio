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
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
