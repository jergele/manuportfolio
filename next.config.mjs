/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Update basePath to match your repository name
    basePath: '/manuportfolio',
    assetPrefix: '/manuportfolio/',  // Add this back
    // Disable source maps in production
    productionBrowserSourceMaps: false,
    distDir: 'dist',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    // Add this to ensure styles are included
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
};

export default nextConfig;
