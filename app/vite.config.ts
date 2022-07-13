/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-22 22:52:42
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-11 22:20:23
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\app\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000 //指定端口号
  },
  plugins: [vue()]
})
