/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["trick-pal.pages.dev"], // 실제 도메인으로 변경
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
