// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', '**/*.vue', '**/*.jpg'],
},
server: {
  host: '0.0.0.0',
  port: process.env.PORT
}
})
