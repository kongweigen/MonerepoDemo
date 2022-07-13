<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-22 22:54:32
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-13 22:25:00
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Button from './components/Button.vue'
</script>

<template>
  <h2>我是UI</h2>
  <Button>你好</Button>
  <k-button>我是组件库按钮</k-button>
  <k-button>Primary</k-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
