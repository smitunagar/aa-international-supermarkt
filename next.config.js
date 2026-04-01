/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        // Allow Shopify CDN images once connected
        protocol: 'https',
        hostname: '*.myshopify.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN:      process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN      ?? '',
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN:  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN  ?? '',
    NEXT_PUBLIC_SITE_URL:                  process.env.NEXT_PUBLIC_SITE_URL                  ?? 'http://localhost:3000',
  },
}

module.exports = nextConfig

