import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
  // Configure images domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.lagless.gg'
      },
    ],
  },
};

export default withMDX(config);
