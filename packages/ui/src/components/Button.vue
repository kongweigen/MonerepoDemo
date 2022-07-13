<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-06-23 22:36:33
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-06-23 22:37:24
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\ui\src\components\Button.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <button type="button">
        <slot></slot>
    </button>
  </div>
</template>

<script setup lang='ts'>
import { reactive, onMounted} from 'vue'
</script>
<style scoped>
</style>