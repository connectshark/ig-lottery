<script setup>
import { ref } from 'vue';
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import postItem from '../components/postItem.vue'

const store = useTokenStore()
const list = ref([])
api.getIgMedias(store.userId, store.token)
  .then(res => {
    list.value = res.data
  })
</script>

<template>
  <h1>Hello me</h1>
  <ul>
    <li class="ig-post" v-for="post in list" :key="post.id">
      <suspense>
        <postItem :id="post.id" />
      </suspense>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.ig-post{
  width: 33%;
  display: inline-block;
}
</style>