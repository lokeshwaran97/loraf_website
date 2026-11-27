import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Only used by the pre-render (SSR) build: react-helmet-async ships CJS that
  // Node cannot import with named exports, so bundle it into the SSR output.
  ssr: {
    noExternal: ['react-helmet-async'],
  },
})
