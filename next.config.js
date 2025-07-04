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
  }
};

module.exports = nextConfig; 