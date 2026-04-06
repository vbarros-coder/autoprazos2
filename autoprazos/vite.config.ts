import { defineConfig } from 'vite'
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig({
  plugins: [pages()],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173,
    open: true
  }
})