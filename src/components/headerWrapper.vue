<script setup>

const navs = [
  {
    path: '/',
    name: '首頁'
  }
]
</script>

<template>
  <header>
    <h1 class="logo">
      <router-link to="/"><i class='bx bxl-instagram'></i>IG抽抽樂</router-link>
    </h1>
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
  position: sticky;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 0 0 10px 10px;
  top: 0;
  left: 0;
  justify-content: space-between;
  background-color: #ffffffaa;
  padding: 20px 10px;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 0 5px #ccc;
  .logo {
    font-size: 24px;
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