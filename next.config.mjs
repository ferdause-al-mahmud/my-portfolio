/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve the smallest modern format each browser supports
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
