<script setup name="digitalPreview">
const store = useDigitalStore()
</script>

<template>
  <Detail
    :projects="store.myProjects[store.selectProjectIndex]"
    crumb="作品集"
    :crumbItem="store.myProjects[store.selectProjectIndex].name"
    :isDigital="false"
  ></Detail>
</template>

<style lang="less" scoped></style>
