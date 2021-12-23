<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'

const store = useTokenStore()

const targetContent = ref('')
const addTarget = () => {
  if (targetContent.value === '') return
  store.addTargetContent(targetContent.value)
  targetContent.value = ''
}

const draw = () => {

}
</script>

<template>
  <section class="filter">
    <h3>篩選條件設定</h3>
    <div class="row">
      <h4>
        指定留言:
        <span class="content" v-for="(content, index) in store.targetContent" :key="content">
          {{ content }}
          <i class="bx bx-x-circle" @click="store.removeTargetContent(index)"></i>
        </span>
      </h4>
      <div class="bar split">
        <input class="input-text" v-model.trim="targetContent" type="text" placeholder="輸入指定留言" />
        <input type="button" @click="addTarget" class="input-add" value="新增" />
      </div>
    </div>
    <div class="row">
      <label>
        <h4>得獎人數: {{ store.people }}人</h4>
        <div class="bar">
          <input
            class="input-range"
            list="peopleMark"
            v-model.number="store.people"
            type="range"
            min="1"
            max="10"
          />
        </div>
      </label>
    </div>
    <div class="row">
      <label>
        <h4>留言標記人數: {{ store.tag }}人</h4>
        <div class="bar">
          <input
            class="input-range"
            list="tagMark"
            v-model.number="store.tag"
            type="range"
            min="0"
            max="5"
          />
        </div>
      </label>
    </div>
    <div class="row">
      <div class="bar">
        <input type="button" value="抽獎" @click="draw" class="btn" />
      </div>
    </div>
    <datalist id="peopleMark">
      <option v-for="num in 10" :key="num" :value="num">{{ num }}</option>
    </datalist>
    <datalist id="tagMark">
      <option value="0">0</option>
      <option v-for="num in 5" :key="num" :value="num">{{ num }}</option>
    </datalist>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/color.scss";
@import "../assets/scss/mixin.scss";
.filter {
  width: 90%;
  margin: auto;
  padding: 2rem;
  box-sizing: border-box;
  text-align: left;
  h3 {
    font-size: 1.5rem;
    color: $main;
    font-weight: 700;
  }
  .row {
    padding: 0.5rem;
    h4 {
      font-size: 1rem;
      line-height: 1.5;
      font-weight: bold;
      color: $sub;
      margin-bottom: 0.5rem;
    }
    .bar {
      .input-text {
        width: 80%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        -webkit-appearance: none;
        box-shadow: 0 0 0 1px $sub;
        transition: box-shadow 0.3s ease;
        box-sizing: border-box;
        &:focus {
          box-shadow: 0 0 0 3px $sub;
        }
      }
      .input-range {
        width: 100%;
        outline: none;
      }
      .input-add {
        @include funBtn;
      }
      .btn {
        @include funBtn;
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }
    .split {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
    .content {
      display: inline-block;
      margin: 0 0.5rem 0.5rem;
      padding: 0 0.5rem;
      color: #fff;
      background-color: $sub;
      border-radius: 0.5rem;
      font-weight: 400;
      i {
        cursor: pointer;
      }
    }
  }
}
</style>