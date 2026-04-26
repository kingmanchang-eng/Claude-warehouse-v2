import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',        // 静态导出 → out/ 目录，由 Cloudflare Worker 托管
  trailingSlash: true,     // /products → /products/index.html，Worker Assets 需要
  images: {
    unoptimized: true,     // 静态导出不支持 Next.js Image Optimization
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // 排除 cloudflare-worker 目录，避免 Next.js 编译 Worker 代码
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/cloudflare-worker/**', '**/node_modules/**'],
    }
    return config
  },
}

export default nextConfig
