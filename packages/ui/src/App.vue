<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-22 22:54:32
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-18 23:12:52
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Button from './components/Button.vue'
import ComponentList from 'packages/list.json'
import { ref } from 'vue'

const routeList = ref(
  ComponentList.map((comp) => {
    return {
      path: `/components/${comp.compName}`,
      name: comp.compZhName
    }
  })
)
</script>

<template>
  <div class="k-kit-doc">
    <aside>
      <router-link v-for="comp in routeList" :to="comp.path">{{
        comp.name
      }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.k-kit-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>
