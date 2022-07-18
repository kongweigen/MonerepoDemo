/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-22 22:54:32
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-18 23:10:16
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\src\main.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import KKitPlugin from '../packages'
import router from './router'

createApp(App).use(KKitPlugin).use(router).mount('#app')
