<script setup>
const router = useRouter()
const store = useDigitalStore()
</script>
<template>
  <div
    class="bg-[#2f2f2f] flex flex-col items-center w-[350px] h-full rounded-[10px] p-[20px] relative"
  >
    <div class="flex justify-center items-center gap-[10px] text-[25px] mt-[30px]">
      <IconAiImage class="ml-[-7px] h-[16px] w-[16px] text-[#b1b1b1]"></IconAiImage>
      <div class="text-[#fff]">Ai Images</div>
    </div>
    <div class="mt-[50px] flex flex-col items-center w-full gap-[20px]">
      <menu-item
        text="作品集"
        @click="
          () => {
            router.push('/home')
            store.selectMenu = 1
          }
        "
        :class="store.selectMenu === 1 ? 'actived' : ''"
        ><IconZuopingji></IconZuopingji
      ></menu-item>
      <menu-item
        text="数字人"
        @click="
          () => {
            router.push('/digitalPeople')
            store.selectMenu = 2
          }
        "
        :class="store.selectMenu === 2 ? 'actived' : ''"
        ><IconShuziren></IconShuziren
      ></menu-item>
      <menu-item
        text="模板"
        @click="
          () => {
            store.selectMenu = 3
          }
        "
        :class="store.selectMenu === 3 ? 'actived' : ''"
        ><IconMoban></IconMoban
      ></menu-item>
      <menu-item
        text="购买"
        @click="
          () => {
            store.selectMenu = 4
          }
        "
        :class="store.selectMenu === 4 ? 'actived' : ''"
        ><IconGoumai></IconGoumai
      ></menu-item>
      <menu-item
        text="反馈"
        @click="
          () => {
            store.selectMenu = 5
          }
        "
        :class="store.selectMenu === 5 ? 'actived' : ''"
        ><IconFankui></IconFankui
      ></menu-item>
    </div>
    <div class="absolute bottom-[20px] w-full px-[10%]">
      <div class="flex items-center text-[20px] text-[#fff] gap-[20px] mb-[5px] ml-[10px]">
        <IconJohn class="h-[40px] w-[40px]"></IconJohn>
        <div>John</div>
      </div>
      <div
        class="bg-[#272727] cursor-pointer box text-[#fff] text-[18px] w-full h-[50px] mt-[20px] flex items-center justify-center rounded-[5px] border-s-"
        @click="store.logout"
      >
        退出登录
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  box-shadow: 0px 0px 15px 1px rgba(14, 13, 13, 0.7);
}
.actived {
  background-color: #fff;
  color: #2e2e2e;
  border-radius: 10px;
  :deep(path) {
    fill: #2e2e2e;
  }
}
</style>
