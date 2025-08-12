import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://m.media-amazon.com/**')
    ]
  }, 
  reactStrictMode: true,
  compress: true,
  trailingSlash: true,  
  experimental: {
    inlineCss: true,
  }
};

export default nextConfig;
