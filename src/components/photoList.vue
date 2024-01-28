<script setup>
const props = defineProps({
  photos: {
    type: Array,
    required: true
  },
  isDigital: {
    type: Boolean,
    default: true
  },
  isCreate: {
    type: Boolean,
    default: false
  }
})
const store = useDigitalStore()
const getPhoto = (val) => {
  if (val.src) {
    val = val.src
  }
  return new URL(val, import.meta.url).href
}
</script>

<template>
  <div class="flex w-full gap-[20px] overflow-auto scrollable">
    <template v-for="(item, index) in props.photos" :key="item">
      <img
        :src="getPhoto(item)"
        @click="
          () => {
            if (props.isCreate) {
              store.selectCreateModel = index
              return
            }
            if (props.isDigital) {
              store.selectDigitalPhoto = index
            } else {
              store.selectProjectPhotoIndex = index
            }
          }
        "
        class="h-[160px] cursor-pointer"
      />
    </template>
  </div>
</template>

<style lang="less" scoped>
//方块大小
.scrollable::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollable::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #777777;
}

.scrollable::-webkit-scrollbar-thumb:hover {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #a1a1a1;
}

.scrollable::-webkit-scrollbar-track {
  border-radius: 5px;
  background: #2f2f2f;
}
</style>
