/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Replace 'portfolio-2024' with your actual repository name
    basePath: process.env.NODE_ENV === 'production' ? '/manuportfolio' : '',
    // Disable source maps in production
    productionBrowserSourceMaps: false,
    // Add this to resolve the transpile error
    transpilePackages: [],
    // Add this if you're having module resolution issues
    experimental: {
      esmExternals: 'loose'
    }
  }
  
  module.exports = nextConfig