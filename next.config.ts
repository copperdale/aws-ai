import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true, // 让每个页面生成 index.html
  reactStrictMode: true,
  images: {
    unoptimized: true, // 关闭图片优化，否则会触发运行时依赖
  },
};

export default nextConfig;
