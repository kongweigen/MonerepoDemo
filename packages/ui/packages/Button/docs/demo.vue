<template>
  <k-button class="mr20" @click="test(1)">按钮1</k-button>
  <k-button class="mr20" @click="test(2)">按钮2</k-button>
  <k-button class="mr20" @click="test(3)">按钮3</k-button>
</template>

<script setup lang="ts">
const test = (val: number) => console.log(val)
</script>
<style scoped lang="scss">
.mr20 {
  margin-right: 20px;
}
</style>
