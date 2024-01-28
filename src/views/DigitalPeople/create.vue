<script setup>
import { InboxOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
const store = useDigitalStore()
const items = ref([
  {
    title: '上传训练集'
  },
  {
    title: '训练中'
  },
  {
    title: '创建成功'
  }
])

const fileList = ref([])
const handleChange = (info) => {
  const status = info.file.status
  if (status !== 'uploading') {
    console.log(info.file, info.fileList)
  }
  if (status === 'done') {
    message.success(`${info.file.name} 上传成功`)
  } else if (status === 'error') {
    message.error(`${info.file.name} 上传失败`)
  }
}

const upLoad = () => {
  store.digitalStep = 0
  store.showCreating = true
  let timer = setInterval(() => {
    store.process = +store.process.slice(0, -1) + 10 + store.process.slice(-1)
    if (store.process === '100%') {
      clearInterval(timer)
      store.showCreating = false
      store.process = '0%'
      store.myDigitals.push(store.myDigitals[store.myDigitals.length - 1])
    }
  }, 200)
}
</script>

<template>
  <div class="flex flex-col py-[20px] items-center">
    <div class="text-[18px] text-[#fff] w-full text-left ml-[100px] mb-[40px]">训练数字人</div>
    <a-steps
      :current="store.createDigitalStep"
      size="small"
      label-placement="vertical"
      :items="items"
    />
    <div class="w-[70%] mt-[30px] bg-[#2f2f2f] py-[30px] px-[40px]">
      <div class="w-full text-center text-[#fff] text-[20px] mb-[20px]">请上传20张图片</div>
      <a-upload-dragger
        v-model:fileList="fileList"
        name="file"
        :multiple="true"
        action="上传地址"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击上传图片</p>
        <p class="ant-upload-hint">支持格式: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
      </a-upload-dragger>
      <div class="flex items-center justify-center mt-[20px]">
        <a-button class="w-[200px]" type="primary" @click="upLoad">上传图片</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ant-steps {
  width: 80%;
}

.ant-btn {
  font-size: 16px;
  height: 40px;
  border-radius: 10px;
}

:deep(.ant-upload) {
  width: 100%;
  height: 200px;
  .ant-upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

:deep(.ant-steps-item-active) {
  .ant-steps-item-title {
    color: #9b51e0 !important;
  }
  .ant-steps-item-icon {
    background-color: #9b51e0 !important;
  }
}

:deep(.ant-steps-item-icon) {
  background-color: #fff !important;
  color: #fff !important;
  position: relative;
  z-index: 10;
}
:deep(.ant-steps-item-title) {
  color: #626666 !important;
}

:deep(.ant-steps-item-tail) {
  background-color: #fff !important;
  padding: 0 !important;
}
</style>
