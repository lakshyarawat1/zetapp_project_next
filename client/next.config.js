/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zetapp.in",
        port: "",
        pathname: "/_next/image",
      },
    ],
  },
};

module.exports = nextConfig;
