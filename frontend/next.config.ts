import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* MediQueue Next.js configuration */
  serverExternalPackages: ["mongoose", "bcryptjs"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
