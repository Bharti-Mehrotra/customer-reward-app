import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/customer-reward-app/",
  test: {
    globals: true,
    environment: 'jsdom',
  },

})

