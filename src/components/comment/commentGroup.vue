<script setup>
import { useTokenStore } from '../../stores/token'
import api from '../../utils/api'
import CommentItem from './commentItem.vue'

const store = useTokenStore()
const props = defineProps({
  postId: String
})

const { data: comments } = await api.getIgPostComment(props.postId, store.token)
</script>

<template>
  <div class="comment-empty" v-if="comments.length === 0">
    <p class="icon">
      <i class="bx bx-message-alt-x"></i>
    </p>
    <p class="content">無留言</p>
  </div>
  <div class="comment-group" v-else>
    <p class="title">帳號</p>
    <p class="title">留言</p>
    <p class="title">時間</p>
    <template v-for="comment in comments" :key="comment.id">
      <Suspense>
        <template #default>
          <CommentItem :id="comment.id" :content="comment.text" />
        </template>
      </Suspense>
    </template>
  </div>
</template>

<style scoped lang="scss">
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
</style>