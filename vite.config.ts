/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    name: "node",
    root: './src/tests',
  },
  server: {
    watch: {
      usePolling: true,
     },
     host: true, // Here
     strictPort: true,
     port: 3000, 
  },
  plugins: [react()],
})
