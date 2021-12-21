<script>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import ls from '../utils/ls'

export default {
  setup() {
    const store = useTokenStore()
    const { token, userId } = ls.load('tokenStore')
    const loading = ref(true)
    const name = ref('')
    const errMsg = ref('')
    if (token) {
      api.userBasic(token)
        .then(res => {
          store.token = token
          store.userId = userId
          name.value = res.name
          loading.value = false
        })
        .catch(() => {
          errMsg.value = '登入效期已過請重新登入'
          loading.value = false
        })
    } else {
      errMsg.value = '請授權'
      loading.value = false
    }
    return {
      name,
      loading,
      errMsg
    }
  }
}

</script>

<template>
  <div v-if="loading">
    <p>讀取中</p>
  </div>
  <div v-else>
    <h2 v-if="name">Welcome!! {{ name }}</h2>
    <h2 v-else-if="errMsg">{{ errMsg }}</h2>
    <h2 v-else>請登入</h2>
  </div>
</template>

<style scoped lang="scss">
</style>