/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  swcMinify: true,
  output: "standalone",
};

export default nextConfig;
