import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work from any sub-path and from a local file,
// which is also what the single-file build relies on.
export default defineConfig({
  base: './',
  plugins: [react()],
})
