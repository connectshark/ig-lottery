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
    return new Promise(resolve => {
      fetch(import.meta.env.VITE_IG_URL + `/me?access_token=${token}&fields=id,name,picture{url}`)
        .then(r => r.json())
        .then(res => resolve(res))
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
      fetch(import.meta.env.VITE_IG_URL + `/${fbId}?access_token=${token}&fields=instagram_business_account,name`)
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
      fetch(import.meta.env.VITE_IG_URL + `/${igId}/media?access_token=${token}&fields=caption,like_count,media_url,comments{user,username,timestamp,replies{username,timestamp,text},text},comments_count,timestamp`)
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
      fetch(import.meta.env.VITE_IG_URL + `/${postId}?access_token=${token}&fields=caption,like_count,media_url,comments{text,timestamp,username,replies{text,username,timestamp,id},id},comments_count`)
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