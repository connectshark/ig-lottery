<script setup>

const navs = [
  {
    path: '/',
    name: '首頁'
  },
  {
    path: '/login',
    name: '登入'
  }
]
</script>

<template>
  <header>
    <h1 class="logo">IG抽抽樂</h1>
    <nav class="nav-bar">
      <ul>
        <li v-for="link in navs" :key="link.path" class="nav-item">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 90%;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 30px;
    line-height: 2;
  }
  .nav-bar{
    ul{
      .nav-item{
        display: inline-block;
        margin: 0 20px;
      }
    }
  }
}
</style>