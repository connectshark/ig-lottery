<script setup>

const navs = [
  {
    path: '/me',
    name: '選擇貼文'
  }
]

const share = () => {
  if (navigator.share) {
    navigator.share({
      title: 'IG抽抽樂',
      text: 'IG留言抽獎最佳選擇',
      url: 'https://ig-lottery.onrender.com',
    }).then(() => {
    })
  }
}
</script>

<template>
  <header>
    <router-link class="logo" to="/">IG抽抽樂</router-link>
    <nav class="nav-bar">
      <ul>
        <li v-for="link in navs" :key="link.path" class="nav-item">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
        <li class="nav-item" title="分享" @click.prevent="share">
          <a href="javascript:;">
            <i class="bx bx-share-alt"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/scss/color.scss";
header {
  position: sticky;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  top: 0;
  left: 0;
  justify-content: space-between;
  background-color: #ffffffaa;
  padding: 1rem;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 0 5px #ccc;
  .logo {
    font-size: 1.5rem;
    line-height: 2rem;
    color: $main;
  }
  .nav-bar {
    ul {
      .nav-item {
        display: inline-block;
        margin: 0 20px;
        a{
          color: $sub;
        }
        &:hover {
          a {
            color: $main;
          }
        }
      }
    }
  }
}
</style>