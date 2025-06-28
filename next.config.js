/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/dotcom',
  assetPrefix: '/dotcom/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 