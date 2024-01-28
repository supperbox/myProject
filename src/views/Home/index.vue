<script setup>
const store = useDigitalStore()
</script>

<template>
  <div>
    <HomePage v-if="store.id === 0"></HomePage>
    <Build crumb="作品集" crumbItem="新建作品" v-if="store.id === 1"></Build>
    <Preview v-if="store.id === 2"></Preview>
  </div>
</template>

<style lang="less" scoped></style>
