import { defineStore } from 'pinia'
import formatter from '../utils/formatter'

const filter = {
  /**
   * 篩選指定文字留言
   * @param {Array} targets 指定留言陣列
   * @param {Array} comments 評論陣列
   */
  targetContent (targets, comments) {
    let filterArray = comments.map(item => item)
    targets.forEach(item => {
      filterArray = comments.filter(comment => comment.content.match(item))
    })
    return filterArray
  }
}

function randomMath (max) {
  return Math.floor(Math.random()*max)
}

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
    },

    setComments (comments) {
      this.comments = formatter.comments(comments)
    },

    draw () {
      let filterArray = filter.targetContent(this.targetContent, this.comments)
      if (this.people >= filterArray.length) {
        return filterArray
      }
      const result = []
      for (let i = 0; i < this.people; i++) {
        const r = randomMath(filterArray.length)
        result.push(filterArray[r])
        filterArray.splice(r, 1)
      }
      return result
    }
  }
})
