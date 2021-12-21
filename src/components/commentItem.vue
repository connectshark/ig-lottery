<script setup>
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
const props = defineProps({
  id: String,
  content: String
})

const store = useTokenStore()
const res = await api.getIgCommentUser(props.id, store.token)
</script>

<template>
<div class="comment-item">
  <p> <a target="_blank" rel="noopener noreferrer" :href="`https://www.instagram.com/${res.username}/`">{{ res.username }}</a> {{ props.content }}</p>
</div>
</template>

<style scoped lang="scss">

</style>