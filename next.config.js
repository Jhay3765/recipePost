/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["bcrypt-ts"],
  },
};

module.exports = nextConfig;
