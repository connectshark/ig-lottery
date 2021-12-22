<script setup>
import { ref } from 'vue';
import { useTokenStore } from '../stores/token'
import MediaItem from '../components/mediaItem.vue'
import api from '../utils/api'
import Guide from '../components/guide.vue';
import Loading from '../components/loading.vue';

const store = useTokenStore()
const list = ref([])


const loading = ref(true)
api.getIgMedias(store.userId, store.token)
  .then(res => {
    list.value = res.data
    loading.value = false
  })
</script>

<template>
  <Guide :title="'選擇抽獎貼文'" :content="'依照時間排序由新到舊依序排列'"/>
  <div class="me-view">
    <Loading v-if="loading"/>
    <ul class="ig-group" v-else>
      <li class="ig-post" v-for="post in list" :key="post.id">
        <Suspense>
          <MediaItem :id="post.id" />
        </Suspense>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/color.scss";
.me-view {
  width: 100%;
  box-sizing: border-box;
  max-width: 600px;
  margin: auto;
  padding: 20px 0;
  .ig-group {
    .ig-post {
      padding: 20px;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>