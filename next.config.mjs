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
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/form",
      "@mantine/notifications",
    ],
  },
};

export default nextConfig;
