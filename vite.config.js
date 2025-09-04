import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 base: '/Creators-landing-page/',   
  server: {
    host: true
  }
})
