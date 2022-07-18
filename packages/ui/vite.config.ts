/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-22 22:54:32
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-18 22:48:52
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001 //指定端口号
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      packages: resolve(__dirname, './packages')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown()
  ],
  build: {
    lib: {
      entry: './packages/index.ts',
      name: 'ui',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
