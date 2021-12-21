<script>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import ls from '../utils/ls'

export default {
  async setup() {
    const store = useTokenStore()
    const { token, userId } = ls.load('tokenStore')
    const name = ref('')
    if (token) {
      const res = await api.userBasic(token)
      name.value = res.name
      store.token = token
      store.userId = userId
    }
    return {
      name
    }
  }
}

</script>

<template>
  <h2 v-if="name">Welcome!! {{ name }}</h2>
  <h2 v-else>請登入</h2>
</template>

<style scoped lang="scss">
</style>