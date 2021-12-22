<script setup>
const url = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}/auth&response_type=code&scope=instagram_basic,pages_show_list,pages_read_engagement`
</script>

<template>
  <a :href="url" class="login">
    <i class="bx bxl-instagram"></i>授權
  </a>
</template>

<style lang="scss" scoped>
@import "../assets/scss/color.scss";
a.login {
  background-image: linear-gradient(135deg, $sub 0%, $main 100%);
  font-size: 20px;
  line-height: 2;
  text-decoration: none;
  color: #fff;
  border-radius: 20px;
  display: block;
  padding: 0 10px;
  margin: auto;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
}
</style>