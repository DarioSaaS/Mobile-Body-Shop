/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Gallery photos never render wider than ~650px (see BeforeAfterGallery),
    // so the default 1920/2048/3840 buckets just waste bandwidth. Capping at
    // 1200 keeps room for 2x-retina displays without over-generating huge
    // variants of source images that top out at 1600px anyway.
    deviceSizes: [400, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
