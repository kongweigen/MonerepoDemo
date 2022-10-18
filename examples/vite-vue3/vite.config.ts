import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import jumpCode from 'vite-jump-code'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jumpCode()]
})
