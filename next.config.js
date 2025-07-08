/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/dotcom' : '',
  assetPrefix: isProd ? '/dotcom/' : '',
  images: {
    unoptimized: true,
    loader: 'default',
    domains: [],
    path: isProd ? '/dotcom/_next/image' : '/_next/image'
  },
  // Configuración adicional para GitHub Pages
  experimental: {
    appDir: true
  },
  // Asegurar que las rutas funcionen correctamente
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true
};

module.exports = nextConfig; 