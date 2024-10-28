/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gltf)$/,
      type: "asset/resource", // Treat GLTF files as assets
    });
    return config;
  },
  images: {
    domains: [
      "www.pexels.com",
      "pexels.com",
      "render.fineartamerica.com",
      "pixels.com",
    ],
  },
};

export default nextConfig;
