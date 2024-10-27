/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/manuportfolio',
    assetPrefix: '/manuportfolio/',
    // Disable source maps in production
    productionBrowserSourceMaps: false,
    distDir: 'out',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    // Remove exportPathMap as it's not compatible with app directory
};

export default nextConfig;
