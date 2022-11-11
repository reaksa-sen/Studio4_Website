/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '192.168.0.23', '159.138.92.5'],
  },
  output: 'standalone',
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path',
        destination: `${[process.env.NEXT_PUBLIC_STRAPI_API_URL]}/uploads/:path`,
      },
    ];
  },
  i18n: {
    locales: ['en', 'kh'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
