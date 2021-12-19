<script setup>
import { useTokenStore } from '../stores/token'
import api from '../utils/api'

const store = useTokenStore()

const props = defineProps({
  id: String
})

const res = await api.getIgPost(props.id, store.token)
</script>

<template>
<div class="post">
  <h2 class="">{{props.id}}</h2>
  <figure>
    <img :src="res.media_url" :alt="props.id">
  </figure>
</div>

</template>

<style scoped lang="scss">
.post{
  figure{
    img{
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>