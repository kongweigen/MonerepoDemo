/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-22 22:54:32
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-23 23:01:31
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\ui\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'ui',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
