<script setup>
import { reactive, ref } from 'vue'
import commentItem from '../components/commentItem.vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'

const props = defineProps({
  postId: String
})

const store = useTokenStore()
const post = ref({})
api.getIgPost(props.postId, store.token)
  .then(res => {
    post.value = res
  })
const comments = ref([])
api.getIgPostComment(props.postId, store.token)
  .then(res => {
    comments.value = res.data
  })
</script>

<template>
  <div class="post-view">
    <div class="post">
      <figure>
        <img :src="post.media_url" :alt="post.caption">
      </figure>
      <figcaption>{{ post.caption }}</figcaption>
      <div class="detail">
        <span class="like"><i class='bx bxs-heart'></i>{{ post.like_count }}</span>
        <span class="comment"><i class='bx bxs-comment-dots'></i>{{ post.comments_count }}</span>
      </div>
    </div>
    
    <ul class="comments">
      <li v-for="comment in comments" :key="comment.id">
        <Suspense>
          <commentItem :id="comment.id" :content="comment.text" />
        </Suspense>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.post-view{
  width: 80%;
  max-width: 600px;
  margin: auto;
  figure{
    img{
      width: 100%;
      vertical-align: middle;
      border-radius: 20px;
    }
  }
}
</style>