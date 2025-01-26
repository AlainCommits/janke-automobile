// next.config.js
import { withNextVideo } from 'next-video/process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.mux.com'],
  },
};

export default withNextVideo(nextConfig);