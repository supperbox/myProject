<script setup name="index">
const store = useDigitalStore()
</script>

<template>
  <div class="">
    <Panel v-if="store.digitalStep === 0"></Panel>
    <Create v-if="store.digitalStep === 1"></Create>
    <DigitalPreview v-if="store.digitalStep === 2"></DigitalPreview>
  </div>
</template>

<style lang="less" scoped></style>
