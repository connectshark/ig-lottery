const api = {
  auth (code) {
    return new Promise((resolve, reject) => {
      fetch( import.meta.env.VITE_URL + `/auth/fb?code=${code}`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  userBasic (token) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_IG_URL + `/me?access_token=${token}`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getUserAccount (token) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_IG_URL + `/me/accounts?access_token=${token}`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getIGBusinessAccount (fbId, token) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_IG_URL + `/${fbId}?access_token=${token}&fields=instagram_business_account`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getIgMedias (igId, token) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_IG_URL + `/${igId}/media?access_token=${token}`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getIgPost (postId, token) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_IG_URL + `/${postId}?access_token=${token}&fields=caption,comments_count,id,ig_id,is_comment_enabled,like_count,media_product_type,media_type,media_url,timestamp`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getIgPostComment (postId, token) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_IG_URL + `/${postId}/comments?access_token=${token}`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getIgCommentUser (commentId, token) {
    return new Promise((resolve, reject) => {
    fetch(import.meta.env.VITE_IG_URL + `/${commentId}?access_token=${token}&fields=from,text,timestamp,replies,username`)
      .then(r => r.json())
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}

export default api