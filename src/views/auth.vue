<template>
  <main class="auth">
    <div class="loading">
      <i class='bx bx-loader-circle bx-spin' ></i>
      <h2 class="tip">努力讀取中</h2>
    </div>
  </main>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'

export default {
  async setup () {
    const code = useRoute().query.code
    const authResponse = await api.auth(code)
    const store = useTokenStore()
    store.token = authResponse.access_token
    
    const accountResponse = await api.getUserAccount(store.token)
    const fbId = accountResponse.data[0].id
    const igRes = await api.getIGBusinessAccount(fbId, store.token)
    const igId = igRes.instagram_business_account.id
    store.userId = igId
  }
}
</script>


<style lang="scss" scoped>
.auth{
  padding-top: 200px;
  box-sizing: border-box;
  .loading{
    width: 80%;
    max-width: 600px;
    margin: auto;
    i{
      font-size: 30px;
      line-height: 2;
    }
    .tip{
      font-size: 30px;
      line-height: 2;
    }
  }
}
</style>
