<script setup name="digitalPreview">
const store = useDigitalStore()
</script>

<template>
  <Detail :projects="store.myDigitals[store.selectDigitalIndex]"></Detail>
</template>

<style lang="less" scoped></style>
