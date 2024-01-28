import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const TEMPLATE_LIST_PATH = '/'
const MODEL_LIST_PATH = '/'

class APIClient {
  constructor() {}
  /**
   * 获取用户的所有图片
   */
  async getImageList() {}
  /**
   * 获取个人信息
   */
  async getUserInfo() {
    let userInfo = new UserInfo()
    userInfo.iconUrl = ''
    userInfo.name = 'Curie'
    return userInfo
  }
  /**
   * 创建图片
   */
  async newImage() {}
  /**
   * 获取可用的模板
   * @returns
   */
  getTemplateList() {
    //return (await axios.get(`${BASE_URL}${TEMPLATE_LIST_PATH}`)).data
    // test
    let templateList = []
    for (let i = 0; i < 10; i++) {
      let item = new TemplateInfo()
      item.femaleLocation = new LocationInfo()
      item.maleLocation = new LocationInfo()
      item.id = `id_${i}`
      item.mainUrl = ''
      item.mainThumbUrl = ''
      item.name = `template_${i}`
      templateList.push(item)
    }
    return templateList
  }
  /**
   * 获取可用的模型
   */
  getModelList() {
    let modelList = []
    for (let i = 0; i < 10; i++) {
      let item = new ModelInfo()
      item.id = `id_${i}`
      item.name = `model ${i}`
      modelList.push(item)
    }
    //return (await axios.get(`${BASE_URL}${MODEL_LIST_PATH}`)).data
    return modelList
  }
}

export const APIManager = new APIClient()
