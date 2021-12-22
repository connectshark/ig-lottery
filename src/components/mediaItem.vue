<script setup>
import dayjs from 'dayjs'
const props = defineProps({
  id: String,
  like_count: Number,
  media_url: String,
  comments_count: Number,
  caption: String,
  timestamp: String
})
const time = dayjs(props.timestamp).format('YYYY/MM/DD')
</script>

<template>
  <router-link :to="`/post/${props.id}`" class="media-item">
    <figure>
      <img :src="props.media_url" :alt="props.caption" />
    </figure>
    <h4 class="media-title">{{ props.caption }}</h4>
    <p class="media-detail">
      <i class="bx bxs-heart"></i>
      {{ props.like_count }}
      <i class="bx bxs-comment-dots"></i>
      {{ props.comments_count }}
    </p>
    <p class="time">{{ time }}</p>
  </router-link>
</template>

<style scoped lang="scss">
@import "../assets/scss/color.scss";
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
    i {
      color: $sub;
    }
  }
  .time {
    grid-area: time;
  }
}
</style>