<script setup name="login">
const store = useDigitalStore()
</script>

<template>
  <div class="flex h-full w-full">
    <div class="w-[50%] flex flex-col">
      <div
        class="flex justify-start items-center gap-[10px] text-[16px] absolute top-[30px] left-[30px]"
      >
        <IconAiImage class="ml-[-7px] h-[16px] w-[16px] text-[#b1b1b1]"></IconAiImage>
        <div class="text-[#fff]">Ai Images</div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center">
        <div class="text-[28px] text-[#fff] mb-[20px]">登录</div>
        <a-form>
          <a-form-item>
            <a-input v-model:value="store.phone" placeholder="手机号码"></a-input>
          </a-form-item>
          <a-form-item>
            <a-row>
              <a-col>
                <a-input v-model:value="store.validCode" placeholder="验证码"></a-input>
              </a-col>
              <a-col class="ml-[10px]">
                <a-button type="primary">发送验证码</a-button>
              </a-col>
            </a-row>
          </a-form-item>
        </a-form>
        <a-button type="primary" class="login" @click="store.login">登录</a-button>
        <div class="text-[#acacac] text-[18px] mt-[30px]">or continue with</div>
        <icon-google class="h-[40px] w-[40px] mt-[30px]"></icon-google>
      </div>
    </div>
    <div class="flex-1 w-[50%] flex">
      <photo-scroll class="w-[34%]" :photos="store.srcArr1"></photo-scroll>
      <photo-scroll class="w-[33%]" :photos="store.srcArr2"></photo-scroll>
      <photo-scroll class="w-[33%]" :photos="store.srcArr3"></photo-scroll>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ant-btn {
  background-color: #2563eb;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  font-size: 17px;
}

.ant-form-item {
  margin-bottom: 35px;
}
.login {
  height: 40px;
  font-size: 17px;
}

.ant-input {
  height: 50px;
  min-width: 300px;
  border-radius: 10px;
}
</style>
