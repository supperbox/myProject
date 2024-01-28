<script setup name="digitalPreview">
const store = useDigitalStore()
const props = defineProps({
  crumb: {
    type: String
  },
  crumbItem: {
    type: String
  }
})

const imgSrc = computed(() => {
  return new URL('../' + store.modelPhotos[store.selectCreateModel].src, import.meta.url).href
})

// 下载
const create = () => {}

// 返回
const goBack = () => {
  store.id = 0
}

const image = ref(null)

const resetLocation = () => {
  let height = image.value.offsetHeight
  let width = image.value.offsetWidth
}
</script>

<template>
  <div class="flex flex-col justify-between w-full">
    <div class="text-[17px] text-[#fff] flex justify-between items-center">
      <div>{{ props.crumb }} > {{ props.crumbItem }}</div>
      <div class="cursor-pointer" @click="goBack">返回</div>
    </div>
    <div class="flex items-center w-full my-[30px]">
      <div class="h-[600px] rounded-[20px] overflow-hidden relative">
        <img ref="image" @load="resetLocation" :src="imgSrc" class="h-[600px]" />
        <a-select v-model:value="store.createSelectModel1" class="select1">
          <template v-for="(item, index) in store.myDigitals" :key="item">
            <a-select-option :value="index">{{ item.name }}</a-select-option>
          </template>
        </a-select>
        <a-select v-model:value="store.createSelectModel2" class="select2">
          <template v-for="(item, index) in store.myDigitals" :key="item">
            <a-select-option :value="index">{{ item.name }}</a-select-option>
          </template>
        </a-select>
      </div>
      <div class="flex justify-center items-center flex-1">
        <div class="flex flex-col pl-[10%] w-full">
          <div class="text-[24px] text-[#fff] mb-[30px]">生成照片</div>
          <div class="text-[16px] text-[#fff] mt-[20px] mb-[5px]">婚纱照模板</div>
          <a-select v-model:value="store.selectCreateModel">
            <template v-for="(item, index) in store.modelPhotos" :key="item">
              <a-select-option :value="index">{{ item.name }}</a-select-option>
            </template>
          </a-select>
          <div class="text-[16px] text-[#fff] mt-[20px] mb-[5px]">使用的模型一</div>
          <a-select v-model:value="store.createSelectModel1">
            <template v-for="(item, index) in store.myDigitals" :key="item">
              <a-select-option :value="index">{{ item.name }}</a-select-option>
            </template>
          </a-select>
          <div class="text-[16px] text-[#fff] mt-[20px] mb-[5px]">使用的模型二</div>
          <a-select v-model:value="store.createSelectModel2">
            <template v-for="(item, index) in store.myDigitals" :key="item">
              <a-select-option :value="index">{{ item.name }}</a-select-option>
            </template>
          </a-select>
          <a-button type="primary" @click="create">生成</a-button>
        </div>
      </div>
    </div>
    <photo-list :photos="store.modelPhotos" :isCreate="true"></photo-list>
  </div>
</template>

<style lang="less" scoped>
.ant-btn {
  height: 40px;
  width: 250px;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2563eb;
  margin-top: 50px;
}

:deep(.ant-select-selector) {
  background-color: #212121 !important;
  height: 40px !important;
  display: flex;
  align-items: center;
  border-radius: 10px !important;
  color: #f2f2f2;
}
.select1 {
  position: absolute;
  :deep(.ant-select-selector) {
    width: 200px;
    height: 200px !important;
    background-color: transparent !important;
    border: 2px solid #fff;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    .ant-select-selection-item {
      text-align: center;
      font-size: 16px;
    }
  }
  top: 170px;
  left: 50px;
}
.select2 {
  position: absolute;
  :deep(.ant-select-selector) {
    width: 200px;
    height: 200px !important;
    background-color: transparent !important;
    border: 2px solid #fff;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    .ant-select-selection-item {
      text-align: center;
      font-size: 16px;
    }
  }
  top: 200px;
  right: 50px;
}
</style>
