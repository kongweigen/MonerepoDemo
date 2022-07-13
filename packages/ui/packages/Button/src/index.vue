<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-23 22:03:10
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-13 22:26:27
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\packages\Button\src\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <button class="k-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
defineEmits(['click'])
</script>
<style lang="scss" scoped>
.k-button {
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: #409eff;
  border: #dcdfe6;
  border-color: #409eff;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
