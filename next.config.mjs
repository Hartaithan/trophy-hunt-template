const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.psnprofiles.com",
      },
      {
        protocol: "http",
        hostname: "**.psnprofiles.com",
      },
    ],
  },
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
