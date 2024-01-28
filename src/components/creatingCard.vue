<script setup>
import dayjs from 'dayjs'

const store = useDigitalStore()
const today = computed(() => {
  return dayjs().format('YYYY-MM-DD')
})
</script>

<template>
  <div
    class="h-[360px] w-[270px] bg-[#2f2f2f] rounded-[15px] flex flex-col items-center gap-[16px] item"
  >
    <div class="w-[270px] h-[250px] overflow-hidden cursor-pointer">
      <img src="../assets/digitalCreating.png" />
    </div>
    <div class="flex flex-1 flex-col pt-[10px] items-center w-full">
      <div class="flex justify-center items-center w-full text-[17px] h-[20px] text-[#fff]">
        <div>数字人生成中{{ ` (${store.process})` }}</div>
      </div>
      <div class="text-[17px] mt-[15px] text-[#fff]">
        创建于 <span class="text-[17px]">{{ today }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.item {
  box-shadow: 0px 0px 15px 1px rgba(20, 20, 20, 0.5);
}

.ant-input {
  font-size: 16px;
  line-height: 28px;
  height: 38px;
  width: 60%;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  text-align: center;
  padding: 2px;
  display: flex;
  align-items: center;
}
</style>
