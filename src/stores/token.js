import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token',{
  state: () => ({
    userId: import.meta.env.VITE_USER_ID || '',
    token: import.meta.env.VITE_TOKEN ||  '',
    comments: [],
    people: 1,
    tag: 0,
    targetContent: []
  }),
  getters: {
  },
  actions: {
    addTargetContent (content) {
      this.targetContent.push(content)
    },

    removeTargetContent (index) {
      this.targetContent.splice(index, 1)
    }
  }
})
