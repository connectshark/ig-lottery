<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'

const store = useTokenStore()

const name = ref('')

api.userBasic(store.token)
  .then(res => {
    name.value = res.name
    store.userId = res.id
  })
</script>

<template>
  <main>
    <h1>Hello 歡迎來到IG抽抽</h1>
    
    <router-link to="/login">login</router-link>
  </main>
</template>
