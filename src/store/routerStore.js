import { defineStore } from 'pinia'

export const useRouterStore = defineStore('router', {
  state: () => {
    return {
      name: '',
      path: ''
    }
  },
  getters: {},
  actions: {}
})
