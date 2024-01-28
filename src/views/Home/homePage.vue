<script setup name="home">
import { message } from 'ant-design-vue'
const store = useDigitalStore()
const router = useRouter()

const createNew = () => {
  if (!store.myDigitals.length) {
    router.push('/digitalPeople')
    store.digitalStep = 0
    store.selectMenu = 1
    message.info('未找到可用的数字人,创建作品前，请先为你的模特创建数字人')
  } else {
    store.id = 1
  }
}
</script>
<template>
  <div>
    <div class="text-[20px] text-[#fff] mb-[20px] ml-[10px]">Hello John 👋🏼,</div>
    <div class="flex flex-wrap gap-[40px]">
      <create-new-card @click="createNew"></create-new-card>
      <template v-for="item in store.myProjects" :key="item">
        <own-projects v-model:name="item.name" :project="item"></own-projects>
      </template>
    </div>
  </div>
</template>
<style lang="less" scoped></style>
