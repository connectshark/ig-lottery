<script setup>
import dayjs from 'dayjs'
import { computed } from 'vue'

const props = defineProps({
  caption: String,
  timestamp: String,
  like_count: Number,
  comments_count: Number,
  media_url: String
})

const time = computed(() => dayjs(props.timestamp).format('YYYY/MM/DD'))
</script>

<template>
<div class="post">
  <h3 class="title">貼文預覽</h3>
  <p class="content">{{ props.caption }}</p>
  <div class="detail">
    <img :src="props.media_url" :alt="props.caption" />
    <span>{{ time }}</span>
    <span>
      <i class="bx bxs-heart"></i>
      {{ props.like_count }}
    </span>
    <span>
      <i class="bx bxs-comment-dots"></i>
      {{ props.comments_count }}
    </span>
  </div>
</div>
</template>

<style scoped lang="scss">
@import '../assets/scss/color.scss';

  .post {
    width: 90%;
    margin: auto;
    .title {
      font-size: 1.5rem;
      padding: 1rem 0;
      text-align: left;
      font-weight: 700;
      color: $base;
    }
    .detail {
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
</style>