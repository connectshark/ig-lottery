<script setup>
import AuthBtn from '../components/authBtn.vue'
import Welcome from '../components/welcome.vue'
import { useTokenStore } from '../stores/token'
const store = useTokenStore()
</script>

<template>
  <main class="home-view">
    <div class="card">
      <Welcome />
      <div v-if="store.token">
        <router-link class="btn" to="/me">選擇列表</router-link>
      </div>
      <AuthBtn v-else />
    </div>
  </main>
</template>

<style lang="scss">
@import '../assets/scss/mixin.scss';

.home-view{
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px 0;
  .btn{
    @include linkBtn;
  }
  .card{
    margin: auto;
    width: 60%;
    padding: 20px;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
    margin-bottom: 30px;
    border-radius: 20px;
  }
  
}
</style>