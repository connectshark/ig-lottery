<script setup>
import HeaderWrapper from './components/headerWrapper.vue'
</script>

<template>
  <HeaderWrapper/>
  <router-view />
</template>

<style lang="scss">
#app{
  font-family: 'Roboto Mono', monospace, 'openhuninn', 'Noto Sans TC', sans-serif;
  background-color: #1A1A1A;
  text-align: center;
  color: #eee;
  min-height: 100vh;
  a{
    text-decoration: none;
    color: #eee;
  }
}
</style>
