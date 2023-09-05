/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "muhammad-gata.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
