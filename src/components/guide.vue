<script setup>
defineProps({
  title: String,
  content: String
})
</script>

<template>
<div class="guide">
  <h2 class="title">{{ title }}</h2>
  <p class="content">{{ content }}</p>
</div>
</template>

<style scoped lang="scss">
@import '../assets/scss/color.scss';
.guide{
  background-color: $main;
  color: #fff;
  padding: 1rem;
  text-align: left;
  .title{
    max-width: 600px;
    margin: auto;
    font-size: 1.5rem;
    line-height: 2;
  }
  .content{
    max-width: 600px;
    margin: auto;
    font-size: 1rem;
    line-height: 2;
  }
}
</style>