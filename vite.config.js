// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mypersonal/', // ✅ use your GitHub repo name here
  plugins: [react()],
})
