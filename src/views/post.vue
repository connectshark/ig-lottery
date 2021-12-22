<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import dayjs from 'dayjs'
import CommentGroup from '../components/comment/commentGroup.vue'
import Loading from '../components/loading.vue'

const props = defineProps({
  postId: String
})

const store = useTokenStore()
const post = ref({})
const time = ref('')
api.getIgPost(props.postId, store.token)
  .then(res => {
    post.value = res
    time.value = dayjs(res.timestamp).format('YYYY/MM/DD')
  })
</script>

<template>
  <div class="post-view">
    <div class="post">
      <h3 class="title">貼文預覽</h3>
      <p class="content">{{ post.caption }}</p>
      <div class="detail">
        <img :src="post.media_url" :alt="post.caption" />
        <span>{{ time }}</span>
        <span>
          <i class="bx bxs-heart"></i>
          {{ post.like_count }}
        </span>
        <span>
          <i class="bx bxs-comment-dots"></i>
          {{ post.comments_count }}
        </span>
      </div>
    </div>

    <Suspense>
      <template #default>
        <CommentGroup :postId="props.postId" />
      </template>
      <template #fallback>
        <Loading/>
      </template>
    </Suspense>
  </div>
</template>

<style scoped lang="scss">
.post-view {
  width: 100%;
  max-width: 600px;
  margin: auto;
  .post {
    width: 80%;
    margin: auto;
    font-size: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    .title {
      font-size: 1rem;
      padding: 1rem 0;
      text-align: left;
      font-weight: 700;
    }
    .detail {
      font-size: 1rem;
      line-height: 1.5;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
}
</style>