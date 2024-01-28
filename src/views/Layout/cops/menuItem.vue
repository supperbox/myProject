import { Item } from 'ant-design-vue/es/menu';
<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
  <div
    class="flex cursor-pointer justify-around items-center w-full px-[10px] h-[55px] text-[19px] text-[#fff] rounded-[10px] box-border item"
  >
    <slot></slot>
    <div class="w-[60%]">{{ props.text }}</div>
    <icon-jiantou class="arrow"></icon-jiantou>
  </div>
</template>

<style lang="less" scoped>
:deep(path) {
  fill: #fff;
}
:deep(svg) {
  height: 20px;
  width: 20px;
}
.arrow {
  height: 16px;
  width: 16px;
}

.item:hover {
  background-color: #fff;
  color: #2e2e2e;
  :deep(path) {
    fill: #2e2e2e;
  }
}
</style>
