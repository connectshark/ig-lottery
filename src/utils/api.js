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
  }
}

export default api