/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Use basePath only in production (GitHub Pages)
    basePath: process.env.NODE_ENV === 'production' ? '/manuportfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/manuportfolio/' : '',
    // Disable source maps in production
    productionBrowserSourceMaps: false,
    distDir: 'dist',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    // Add this to ensure all chunks are included
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          net: false,
          tls: false,
        };
      }
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
            },
          },
        },
      };
      return config;
    },
};

export default nextConfig;
