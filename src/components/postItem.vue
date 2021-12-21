<script setup>
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import dayjs from 'dayjs'

const store = useTokenStore()

const props = defineProps({
  id: String,
  viewer: String
})

const res = await api.getIgPost(props.id, store.token)
const time = dayjs(res.timestamp).format('YYYY/MM/DD')
</script>

<template>
  <router-link :to="`/post/${props.id}`" class="post-item" :class="props.viewer">
    <figure>
      <img :src="res.media_url" :alt="props.id" />
    </figure>
    <p class="caption">{{ res.caption }}</p>
    <p class="time">{{ time }}</p>
  </router-link>
</template>

<style scoped lang="scss">
@import '../assets/scss/media.scss';
.post-item {
  transition: display .3s ease;
  .caption {
    font-size: 16px;
    line-height: 1.5;
  }
}
.grid {
  display: block;
  .caption {
    margin: auto;
    width: 110px;
    @include desktops {
      width: 200px;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  figure {
    img {
      width: 60%;
      @include desktops {
        height: 150px;
        width: 150px;
      }
      object-fit: contain;
      vertical-align: middle;
    }
  }
}
.list {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  figure {
    img {
      width: 20px;
      height: 20px;
      object-fit: contain;
      vertical-align: middle;
    }
  }
  .time {
    margin-left: auto;
  }
}
</style>