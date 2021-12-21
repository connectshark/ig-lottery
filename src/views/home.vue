<script setup>
import { onErrorCaptured } from 'vue'
import AuthBtn from '../components/authBtn.vue'
import Welcome from '../components/welcome.vue'
import { useTokenStore } from '../stores/token'
const store = useTokenStore()

onErrorCaptured(() => {
  console.log('err')
})
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <Welcome />
      </template>
      <template #fallback>
        <div>驗證中</div>
      </template>
    </Suspense>
    <div v-if="store.token">
      <router-link to="/me">選擇列表</router-link>
    </div>
    <AuthBtn v-else />
  </main>
</template>
