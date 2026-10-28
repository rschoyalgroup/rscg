import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Vibhuti Choyal's page moved when her designation changed to Executive Director
      { source: "/leadership-gm", destination: "/vibhuti-choyal", permanent: true },
    ];
  },
};

export default nextConfig;
