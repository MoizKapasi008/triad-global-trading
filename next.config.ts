import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Vary",
            value: "Accept, Accept-Encoding",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/(.*)",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*text/markdown.*)",
            },
          ],
          destination: "/api/markdown?path=$1",
        },
      ],
    };
  },
};

export default nextConfig;
