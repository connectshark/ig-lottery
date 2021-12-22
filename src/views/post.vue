<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import dayjs from 'dayjs'
import CommentItem from '../components/comment/commentItem.vue'
import Loading from '../components/loading.vue'

const props = defineProps({
  postId: String
})

const store = useTokenStore()
const loading = ref(true)
const post = ref({})
const time = ref('')
api.getIgPost(props.postId, store.token)
  .then(res => {
    post.value = res
    time.value = dayjs(res.timestamp).format('YYYY/MM/DD')
    loading.value = false
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

    <Loading v-if="loading" />
    <template v-else>
      <div class="comment-group" v-if="post.comments_count > 0">
        <p class="title">帳號</p>
        <p class="title">留言</p>
        <p class="title">時間</p>
        <CommentItem
          v-for="comment in post.comments.data"
          :id="comment.id"
          :timestamp="comment.timestamp"
          :content="comment.text"
          :username="comment.username"
        />
      </div>
      <div class="comment-empty" v-else>
        <p class="icon">
          <i class="bx bx-message-alt-x"></i>
        </p>
        <p class="content">無留言</p>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/color.scss';
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
      color: $sub;
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
      i{
        color: $sub;
      }
    }
  }
  .comment-group {
    text-align: left;
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 1.5rem;
    padding: 1.5rem 0;
    .title {
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 700;
    }
  }
  .comment-empty {
    padding: 2rem 0;
    font-size: 4rem;
    .content {
      font-size: 1.5rem;
    }
  }
}
</style>