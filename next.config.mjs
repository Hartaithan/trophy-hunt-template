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
    ],
  },
};

export default nextConfig;
