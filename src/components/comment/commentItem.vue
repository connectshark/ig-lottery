<script setup>
import dayjs from 'dayjs'
const props = defineProps({
  id: String,
  content: String,
  timestamp: String,
  username: String
})

const time = dayjs(props.timestamp).format('YYYY/MM/DD HH:mm:ss')
</script>

<template>
  <div class="comment-item">
    <a
      target="_blank"
      class="account"
      rel="noopener noreferrer"
      :href="`https://www.instagram.com/${props.username}/`"
    >{{ props.username }}</a>
    <p class="content">{{ props.content }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/media.scss";
@import "../../assets/scss/color.scss";
.comment-item {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  @include desktops {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .account {
    color: $sub;
    &:hover {
      text-decoration: underline;
    }
  }
  .content {
    @include desktops {
      word-break: break-all;
      margin-left: 1rem;
    }
  }
  .time {
    font-size: 0.5rem;
    @include desktops {
      margin-left: auto;
      font-size: 1rem;
    }
  }
}
</style>