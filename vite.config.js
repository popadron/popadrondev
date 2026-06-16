import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import path from 'path'

export default defineConfig({
  base: '/popadrondev/',
  plugins: [
    vue(),
    tailwindcss(),
    svgLoader({
      defaultImport: 'component'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@svg': path.resolve(__dirname, 'src/assets/svg')
    }
  }
})
