<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import CommentItem from '../components/comment/commentItem.vue'
import Loading from '../components/loading.vue'
import Preview from '../components/preview.vue'

const props = defineProps({
  postId: String
})

const store = useTokenStore()
const loading = ref(true)
const post = ref({})
api.getIgPost(props.postId, store.token)
  .then(res => {
    post.value = res
    loading.value = false
  })
</script>

<template>
  <div class="post-view">
    <Preview
      :caption="post.caption"
      :like_count="post.like_count"
      :media_url="post.media_url"
      :timestamp="post.timestamp"
      :comments_count="post.comments_count"
    />

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