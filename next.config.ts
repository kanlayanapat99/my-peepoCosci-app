import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [ //allow domain
      {protocol: "https", hostname: "api.codingthailand.com"},
    ]
  }
};

export default nextConfig;
