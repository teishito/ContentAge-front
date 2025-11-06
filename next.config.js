/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://contentage-back.azurewebsites.net/api/:path*', // バックエンドのURL
      },
    ];
  },
};

module.exports = nextConfig;
