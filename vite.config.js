import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  alias: {
    'graphql-request': '/node_modules/graphql-request/dist/src/index.js',
  }

})

