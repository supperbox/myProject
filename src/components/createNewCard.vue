<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '创建你的作品'
  }
})
</script>

<template>
  <div
    class="h-[360px] w-[270px] cursor-pointer bg-[#2f2f2f] rounded-[15px] flex flex-col justify-center items-center gap-[40px] item"
  >
    <div class="text-[19px] text-[#c8c8c8]">{{ props.text }}</div>
    <IconTianjia class="h-[100px] w-[100px] icon"></IconTianjia>
  </div>
</template>

<style lang="less" scoped>
.item {
  box-shadow: 0px 0px 15px 1px rgba(20, 20, 20, 0.5);
}
.icon:hover {
  :deep(path) {
    fill: rgb(235, 234, 234);
  }
}
</style>
