<script setup>
const store = useDigitalStore()
</script>
<template>
  <div>
    <div class="text-[20px] text-[#fff] mb-[20px] ml-[10px]">Hello John 👋🏼,</div>
    <div class="flex flex-wrap gap-[40px]">
      <div
        @click="
          () => {
            store.digitalStep = 1
          }
        "
      >
        <create-new-card text="训练你的数字人"></create-new-card>
      </div>
      <template v-for="item in store.myDigitals" :key="item">
        <own-projects v-model:name="item.name" :project="item" :is-digital="true"></own-projects>
      </template>
      <creating-card v-if="store.showCreating"></creating-card>
    </div>
  </div>
</template>
<style lang="less" scoped></style>
