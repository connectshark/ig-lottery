<script setup>
import AuthBtn from '../components/authBtn.vue'
import { useTokenStore } from '../stores/token'
import Guide from '../components/guide.vue';
</script>

<template>
  <Guide :title="'歡迎使用IG抽抽樂'" :content="'留言抽獎最佳選擇'"/>
  <main class="home-view">
    <div class="card">
      <AuthBtn/>
    </div>
  </main>
</template>

<style lang="scss">
@import '../assets/scss/mixin.scss';

.home-view{
  max-width: 600px;
  margin: auto;
  padding: 1rem 0;
  .btn{
    @include linkBtn;
  }
  .card{
    margin: auto;
    width: 90%;
    padding: 2rem;
    box-sizing: border-box;
    box-shadow: 0 0 2rem -12px rgb(0 0 0 / 25%);
    margin-bottom: 30px;
    border-radius: 1rem;
  }
  
}
</style>