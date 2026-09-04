import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

const redirectRootPlugin = (): Plugin => ({
  name: 'redirect-root',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/' || req.url === '') {
        res.writeHead(302, { Location: '/solis-lux/' })
        res.end()
        return
      }
      next()
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/' || req.url === '') {
        res.writeHead(302, { Location: '/solis-lux/' })
        res.end()
        return
      }
      next()
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  base: '/solis-lux/',
  plugins: [react(), tailwindcss(), redirectRootPlugin()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: true,
  },
  preview: {
    port: 3000,
    host: true,
    allowedHosts: true,
  },
})


