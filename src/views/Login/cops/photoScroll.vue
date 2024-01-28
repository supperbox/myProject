<script setup>
const props = defineProps({
  photos: Array,
  default: () => []
})
const hrefArr = props.photos.map((item) => {
  return new URL(item, import.meta.url).href
})

const photoBox = ref(null)
const scrollBox = ref(null)
const change = ref('0px')
const imgBox1 = ref(null)
const imgBox2 = ref(null)

onMounted(() => {
  setTimeout(() => {
    console.log(
      scrollBox.value.scrollHeight,
      photoBox.value.offsetHeight,
      imgBox1.value.clientHeight
    )
    change.value = -imgBox1.value.clientHeight + 'px'
  }, 100)
})
</script>

<template>
  <div class="h-full overflow-hidden" ref="photoBox">
    <div id="scrollBox" ref="scrollBox" class="scrollBox" :style="{ '--myHeight': change }">
      <div ref="imgBox1">
        <template v-for="item in hrefArr" :key="item">
          <img :src="item" class="w-full" />
        </template>
      </div>
      <div ref="imgBox2">
        <template v-for="item in hrefArr" :key="item">
          <img :src="item" class="w-full" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.scrollBox {
  animation: rowup 30s linear infinite;
}

@keyframes rowup {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(var(--myHeight));
  }
}
</style>
