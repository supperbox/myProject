<script setup>
const store = useRouterStore()
</script>

<template>
  <div class="bg-[#212121] h-[100vh] w-full flex min-h-[600px]">
    <Layout v-if="store.name !== 'login'"></Layout>
    <div :class="store.name === 'login' ? 'flex-1' : 'h-full py-[20px] px-[40px] flex-1'">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
