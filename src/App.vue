<script setup>
import HeaderWrapper from './components/headerWrapper.vue'

</script>

<template>
  <HeaderWrapper />
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "Roboto Mono", monospace, "openhuninn", "Noto Sans TC",
    sans-serif;
  background-color: #F6F7F9;
  text-align: center;
  color: #232;
  min-height: 100vh;
}
a {
  text-decoration: none;
  color: #232;
}
</style>
