/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mgl.gogo.mn',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'mgl.gogo1.mn',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
