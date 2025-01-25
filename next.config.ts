import type { NextConfig } from "next";
import { withNextVideo } from 'next-video/process';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextVideo(nextConfig);
