// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Ignore type errors during builds (optional, helps if TS is strict)
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
