/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-07-13 21:47:53
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-18 22:05:48
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\packages\Button\index.ts
 * @Description: 组件库导出文件
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { App, Plugin } from 'vue'
import Button from './src/index.vue'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('k-button', Button)
  }
}

export { Button }
