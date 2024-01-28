import { defineStore } from 'pinia'

export const useDigitalStore = defineStore('digital', {
  state: () => {
    return {
      phone: '',
      validCode: '',
      id: 0,
      digitalStep: 0,
      selectMenu: 0,

      myProjects: [
        {
          index: 0,
          name: '海边写实',
          num: 25,
          date: '2024.10.10',
          src: '../assets/img-card.png',
          models: ['数字人1号', '数字人2号'],
          rate: '1024×2048',
          photos: [
            '../assets/img-card.png',
            '../assets/digital4.png',
            '../assets/digital.png',
            '../assets/digital2.png',
            '../assets/digital3.png',
            '../assets/digital.png',
            '../assets/digital4.png',
            '../assets/digital4.png',
            '../assets/digital4.png',
            '../assets/digital4.png',
            '../assets/digital4.png'
          ]
        }
      ],

      selectProjectIndex: 0,
      selectProjectPhotoIndex: 0,

      myDigitals: [
        {
          index: 0,
          name: '数字人一号',
          date: '2024.05.05',
          num: 20,
          photos: [
            '../assets/digital2.png',
            '../assets/digital.png',
            '../assets/digital3.png',
            '../assets/digital4.png',
            '../assets/img-card.png',
            '../assets/digital4.png',
            '../assets/digital4.png',
            '../assets/digital4.png',
            '../assets/digital4.png'
          ]
        }
      ],

      selectDigitalIndex: 0,
      selectDigitalPhoto: 0,

      createDigitalStep: 0,
      showCreating: false, // 展示正在生成
      process: '0%', // 构建进度

      modelPhotos: [
        {
          name: '田园风',
          src: '../assets/template.png'
        },
        {
          name: '城市风',
          src: '../assets/digital4.png'
        },
        {
          name: '城市风',
          src: '../assets/img-card.png'
        },
        {
          name: '城市风',
          src: '../assets/digital4.png'
        },
        {
          name: '城市风',
          src: '../assets/digital4.png'
        },
        {
          name: '城市风',
          src: '../assets/digital4.png'
        },
        {
          name: '城市风',
          src: '../assets/img-card.png'
        },
        {
          name: '城市风',
          src: '../assets/digital4.png'
        },
        {
          name: '城市风',
          src: '../assets/digital4.png'
        }
      ], // 模板图片

      selectCreateModel: 0, // 选中的生成作品集模板
      createSelectModel1Index: null, // 生成作品使用的模型1索引
      createSelectModel2Index: null,

      // 首页瀑布图的三列图片集合
      srcArr1: [
        '../../../assets/digital.png',
        '../../../assets/digital2.png',
        '../../../assets/digital3.png',
        '../../../assets/digital4.png',
        '../../../assets/digital.png',
        '../../../assets/digital2.png',
        '../../../assets/digital3.png',
        '../../../assets/digital4.png',
        '../../../assets/digital4.png',
        '../../../assets/digital4.png'
      ],
      srcArr2: [
        '../../../assets/0.jpg',
        '../../../assets/1.jpg',
        '../../../assets/2.jpg',
        '../../../assets/3.jpg',
        '../../../assets/4.jpg',
        '../../../assets/5.jpg',
        '../../../assets/6.jpg'
      ],
      srcArr3: [
        '../../../assets/7.jpg',
        '../../../assets/8.jpg',
        '../../../assets/9.jpg',
        '../../../assets/10.jpg',
        '../../../assets/11.jpg',
        '../../../assets/12.jpg'
      ]
    }
  },
  getters: {},
  actions: {
    // 登入登出
    login() {
      this.$reset()
      router.push('/home')
    },
    logout() {
      this.$reset()
      router.push('/login')
    },

    // 创建新项目 接口
    createNewProject() {},

    // 创建新数字人
    createNewDigital() {}
  }
})
