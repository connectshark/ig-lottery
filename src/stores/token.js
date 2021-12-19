import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token',{
  state: () => ({
    userId: '',
    token: import.meta.env.VITE_TOKEN ||  '',
  }),
  getters: {
  },
  actions: {
  }
})
