<script setup>
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
import dayjs from 'dayjs'

const store = useTokenStore()

const props = defineProps({
  id: String
})

const res = await api.getIgPost(props.id, store.token)
const time = dayjs(res.timestamp).format('YYYY/MM/DD')
</script>

<template>
<router-link :to="`/post/${props.id}`" class="post-item">
  <figure>
    <img :src="res.media_url" :alt="props.id">
  </figure>
  <p class="caption">{{ res.caption }}</p>
  <p class="time">{{time}}</p>
</router-link>

</template>

<style scoped lang="scss">
@import '../assets/scss/media.scss';
.post-item{
  display: block;
  .caption{
    margin: auto;
    width: 110px;
    @include desktops {
      width: 200px;
    }
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  figure{
    img{
      width: 100%;
      @include desktops {
        height: 150px;
        width: 150px;
      }
      object-fit: contain;
      vertical-align: middle;
    }
  }
}
</style>