<script setup>
import { useTokenStore } from '../../stores/token'
import api from '../../utils/api'
import dayjs from 'dayjs'
const props = defineProps({
  id: String,
  content: String
})

const store = useTokenStore()
const res = await api.getIgCommentUser(props.id, store.token)
const time = dayjs(res.timestamp).format('YYYY/MM/DD HH:mm:ss')
</script>

<template>
  <a
    target="_blank"
    class="account"
    rel="noopener noreferrer"
    :href="`https://www.instagram.com/${res.username}/`"
  >{{ res.username }}</a>
  <p class="content">{{ props.content }}</p>
  <p class="time">{{ time }}</p>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/media.scss';
.account{
  color: deepskyblue;
  word-break: break-all;
  font-size: .5rem;
  transition: font .3s ease;
  @include desktops {
    font-size: 1rem;
  }
  &:hover{
    text-decoration: underline;
  }
}
.time{
  font-size: .5rem;
  transition: font .3s ease;
  @include desktops {
    font-size: 1rem;
  }
}
.content, .time{
  word-break: break-all;

}
</style>