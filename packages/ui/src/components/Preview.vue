<!--
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2022-07-19 22:53:34
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2022-07-19 23:07:51
 * @FilePath: \webpack-learne:\webProject\Monerepo\MonerepoDemo\packages\ui\src\components\Preview.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by kongweigen 421505648@qq.com, All Rights Reserved. 
-->
<template>
  <div class="container">
    <div class="comp">
      <slot></slot>
    </div>
    <div class="code">
      <pre v-show="codeVisible">{{ sourceCode }}</pre>
      <span @click="codeVisible = true">查看代码</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps<{
  compName: string
  demoName: string
}>()

const sourceCode = ref('')
const codeVisible = ref(false)

onMounted(async () => {
  let rsp = await import(
    /* @vite-ignore */
    `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`
  )
  console.log(rsp)
  sourceCode.value = rsp.default
})
</script>
<style scoped lang="scss">
.container {
  border: 1px dashed #e7e7e7;
  .comp {
    padding: 20px;
  }
  .code {
    padding: 20px;
    border-top: 1px dashed #e7e7e7;
  }
}
</style>
