/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/dotcomIA',
  assetPrefix: '/dotcomIA/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 