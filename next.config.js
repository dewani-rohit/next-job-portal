/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i9hsg5igemli4spo.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
