/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-07-18 22:11:18
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-18 23:05:23
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\src\router.ts
 * @Description:
 *
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/components/Button'
  },
  {
    name: 'Button',
    path: '/components/Button',
    component: () => import('../packages/Button/docs/README.md')
  }
]

const routerConfig: RouterOptions = {
  history: createWebHistory(),
  routes,
  // 路由切换之后的动作, 回到顶部
  scrollBehavior(to, from) {
    if (to.path !== from.path) {
      return {
        top: 0
      }
    }
  }
}

const router = createRouter(routerConfig)

export default router
