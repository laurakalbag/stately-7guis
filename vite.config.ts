import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // We need this here to ensure changes to the .env file are picked up while running in dev mode
  optimizeDeps: { include: ['@statelyai/sky', '@statelyai/sky-react'] },
})
