<script setup name="digitalPreview">
const store = useDigitalStore()
const props = defineProps({
  crumb: {
    type: String,
    default: '数字人化身'
  },
  crumbItem: {
    type: String,
    default: '数字人详情'
  },
  projects: {
    type: Object,
    default: () => {
      photos: ['../assets/digital.png']
    }
  },
  isDigital: {
    type: Boolean,
    default: true
  }
})

const imgSrc = computed(() => {
  if (props.isDigital) {
    return new URL(props.projects.photos[store.selectDigitalPhoto], import.meta.url).href
  } else {
    return new URL(props.projects.photos[store.selectProjectPhotoIndex], import.meta.url).href
  }
})

// 下载
const download = () => {}

// 返回
const goBack = () => {
  if (props.isDigital) {
    store.digitalStep = 0
  } else {
    store.id = 0
  }
}
</script>

<template>
  <div class="flex flex-col justify-between w-full">
    <div class="text-[17px] text-[#fff] flex justify-between items-center">
      <div>{{ props.crumb }} > {{ props.crumbItem }}</div>
      <div class="cursor-pointer" @click="goBack">返回</div>
    </div>
    <div class="flex items-center w-full my-[30px]">
      <div class="h-[600px] rounded-[20px] overflow-hidden">
        <img :src="imgSrc" class="h-[600px]" />
      </div>
      <div class="flex justify-center items-center flex-1">
        <div class="flex flex-col pl-[10%]">
          <div class="text-[24px] text-[#fff] mb-[30px]">详情</div>
          <div v-if="props.isDigital" class="flex flex-col text-[20px] text-[#9d9d9d] gap-[25px]">
            <div>名称: {{ props.projects.name }}</div>
            <div>创建时间: {{ props.projects.date }}</div>
            <div>使用素材数量: {{ props.projects.num }} 张</div>
          </div>
          <div v-else class="flex flex-col text-[20px] text-[#9d9d9d] gap-[25px]">
            <div>
              使用的模型:
              <span v-for="item in props.projects.models" :key="item" class="mr-[5px]">{{
                item
              }}</span>
            </div>
            <div>创建时间: {{ props.projects.date }}</div>
            <div>分辨率: {{ props.projects.rate }}</div>
          </div>
          <a-button type="primary" @click="download">下载</a-button>
        </div>
      </div>
    </div>
    <photo-list :photos="props.projects.photos" :isDigital="props.isDigital"></photo-list>
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
  margin-top: 30px;
}
</style>
