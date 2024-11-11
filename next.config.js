/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["trick-pal.pages.dev"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://www.youtube.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
