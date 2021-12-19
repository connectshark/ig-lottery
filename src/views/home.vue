<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'

const store = useTokenStore()

const name = ref('')

api.userBasic(store.token)
  .then(res => {
    name.value = res.name
  })
</script>

<template>
  <main>
    <h1>Hello {{name}}</h1>
  </main>
</template>
