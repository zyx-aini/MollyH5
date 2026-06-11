import { defineConfig } from 'vite';

export default defineConfig({
  // 使用相对路径，部署到任何子路径均可正常访问
  base: './',

  build: {
    // 输出到 dist 目录
    outDir: 'dist',
    // 清空后重新构建
    emptyOutDir: true,
    // 启用 sourcemap（便于调试，生产环境可关闭）
    sourcemap: false,
    // 资源内联阈值（小于 4KB 的图片直接 base64 内联）
    assetsInlineLimit: 4096,
    // CSS 代码分割
    cssCodeSplit: true,
    // 压缩
    minify: 'esbuild',
    // 生成 manifest 便于版本追踪
    manifest: true,
    // 生成 .gz 压缩文件（GitHub Pages 不会自动 gzip，但可用于其他托管）
    target: 'es2015',
    // rollup 输出配置（确保文件名带 hash）
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },

  // 开发服务器配置
  server: {
    host: true,
    port: 5173,
    open: false
  },

  // preview 配置
  preview: {
    host: true,
    port: 4173
  }
});
