<template>
  <div>
    我是父节点
    <div>
      <button>父节点的按钮</button>
      <Son></Son>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import Son from './Son.vue'
</script>
<style scoped></style>
