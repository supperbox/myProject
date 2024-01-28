<script setup>
const store = useDigitalStore()
const props = defineProps({
  project: {
    type: Object
  },
  name: {
    type: String,
    default: '海边写实'
  },
  isDigital: {
    type: Boolean,
    default: false
  }
})
const name = ref(props.project.name)
const emits = defineEmits(['update:name'])
const changeName = () => {
  emits('update:name', name.value)
}
const imgUrl = ref(null)
onMounted(() => {
  imgUrl.value = new URL(props.project.photos[0], import.meta.url).href
})
</script>

<template>
  <div
    class="h-[360px] w-[270px] bg-[#2f2f2f] rounded-[15px] flex flex-col items-center gap-[16px] item"
  >
    <div
      class="w-[270px] h-[250px] overflow-hidden cursor-pointer"
      @click="
        () => {
          if (isDigital) {
            store.digitalStep = 2
            store.selectDigitalIndex = props.project.index
          } else {
            store.id = 2
            store.selectProjectIndex = props.project.index
          }
        }
      "
    >
      <img :src="imgUrl" class="w-[270px]" />
    </div>
    <div class="flex flex-1 flex-col pt-[10px] items-center w-full">
      <div class="flex justify-center items-center w-full text-[17px] h-[20px] text-[#fff]">
        <a-input v-model:value="name" @blur="changeName"></a-input>
        <div v-if="!props.isDigital">（{{ props.project.num }}张）</div>
      </div>
      <div class="text-[17px] mt-[15px] text-[#fff]">
        创建于 <span class="text-[17px]">{{ props.project.date }}</span>
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
