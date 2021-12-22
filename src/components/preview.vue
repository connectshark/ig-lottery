<script setup>
import dayjs from 'dayjs'
const props = defineProps({
  caption: String,
  timestamp: String,
  like_count: Number,
  comments_count: Number,
  media_url: String
})

const time = dayjs(props.timestamp).format('YYYY/MM/DD')
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
</style>