// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");

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
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withContentlayer(nextConfig);
