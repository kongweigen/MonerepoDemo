/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-23 21:58:29
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-13 22:05:05
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\packages\index.ts
 * @Description: 导出组件库, 它默认导出了一个 VuePlugin，同时也导出了不同的组件
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */

import { App, Plugin } from 'vue'
import { ButtonPlugin } from './Button'

const KKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  }
}

export default KKitPlugin

export * from './Button'
