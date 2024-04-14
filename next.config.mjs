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
};

export default nextConfig;
