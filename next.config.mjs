/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static exports
    images: {
      unoptimized: true, // Required for static export
    },
    // Add your repository name here if deploying to GitHub Pages
    basePath: '/manuportfolio', // e.g., '/portfolio-2024'
    // Disable source maps in production
    productionBrowserSourceMaps: false,
  }
  
  module.exports = nextConfig