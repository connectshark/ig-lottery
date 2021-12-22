import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token',{
  state: () => ({
    userId: import.meta.env.VITE_USER_ID || '',
    token: import.meta.env.VITE_TOKEN ||  '',
  }),
  getters: {
  },
  actions: {
  }
})
