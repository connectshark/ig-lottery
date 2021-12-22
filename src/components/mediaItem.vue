<script setup>
import dayjs from 'dayjs'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'

const store = useTokenStore()
const props = defineProps({
  id: String
})

const post = await api.getIgPost(props.id, store.token)
const time = dayjs(post.timestamp).format('YYYY/MM/DD')
</script>

<template>
  <router-link :to="`/post/${props.id}`" class="media-item">
    <figure>
      <img :src="post.media_url" :alt="post.caption" />
    </figure>
    <h4 class="media-title">{{ post.caption }}</h4>
    <p class="media-detail">
      <i class="bx bxs-heart"></i>
      {{ post.like_count }}
      <i class="bx bxs-comment-dots"></i>
      {{ post.comments_count }}
    </p>
    <p class="time">{{ time }}</p>
  </router-link>
</template>

<style scoped lang="scss">
.media-item {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "figure title title title ." "figure detail detail detail time";
  grid-gap: 4px;
  text-align: left;
  font-size: 1rem;
  figure {
    grid-area: figure;
    img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      object-fit: contain;
      vertical-align: middle;
    }
  }
  .media-title {
    grid-area: title;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .media-detail {
    grid-area: detail;
    line-height: 2;
  }
  .time {
    grid-area: time;
  }
}
</style>