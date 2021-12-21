<script setup>
import { ref } from 'vue';
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import postItem from '../components/postItem.vue'

const store = useTokenStore()
const list = ref([])
const errMsg = ref('')
const viewer = ref('grid')

const changeViewer = newViewer => {
  viewer.value = newViewer
}
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
  <div class="view-group">
    <div class="view-item" @click="changeViewer('list')" :class="{ active: viewer === 'list' }"><i class='bx bx-list-ul'></i></div>
    <div class="view-item" @click="changeViewer('grid')" :class="{ active: viewer === 'grid' }"><i class='bx bxs-grid'></i></div>
  </div>
  <ul class="ig-group">
    <li class="ig-post" v-for="post in list" :key="post.id">
      <suspense>
        <postItem :id="post.id" :viewer="viewer" />
      </suspense>
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss">
@import '../assets/scss/media.scss';
@import '../assets/scss/color.scss';
.me-view{
  width: 90%;
  max-width: 600px;
  margin: auto;
  padding: 20px 0;
  .view-group{
    width: 60px;
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(2, 30px);
    grid-auto-rows: 30px;
    .view-item{
      font-size: 30px;
      line-height: 1;
      cursor: pointer;
    }
    .active{
      color: $main;
    }
  }
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