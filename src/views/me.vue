<script setup>
import { ref } from 'vue';
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import postItem from '../components/postItem.vue'

const store = useTokenStore()
const list = ref([])
const errMsg = ref('')
api.getIgMedias(store.userId, store.token)
  .then(res => {
    list.value = res.data
  })
  .catch(() => {
    errMsg.value = '登入效期已過請重新登入'
  })
</script>

<template>
<div class="me-view">
  <div v-if="errMsg">{{ errMsg }}</div>
  <ul class="ig-group">
    <li class="ig-post" v-for="post in list" :key="post.id">
      <suspense>
        <postItem :id="post.id" />
      </suspense>
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss">
@import '../assets/scss/media.scss';
.me-view{
  width: 90%;
  max-width: 600px;
  margin: auto;
  padding: 20px 0;
  .ig-group{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
    @include desktops {
      grid-template-columns: repeat(3, 200px);
    }
  }
}
</style>