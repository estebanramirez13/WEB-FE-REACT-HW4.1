import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://estebanramirez13.github.io/Reactjs-deploy-githubpages', // Link page
})