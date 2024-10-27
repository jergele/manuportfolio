/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Update basePath to match your repository name
    basePath: '/manuportfolio',
    // Remove assetPrefix as it's not needed with basePath
    // Disable source maps in production
    productionBrowserSourceMaps: false,
    distDir: 'dist',  // Change from 'out' to 'dist'
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
};

export default nextConfig;
