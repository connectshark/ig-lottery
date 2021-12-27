<template>
  <transition name="fade">
    <div class="modal-background" v-if="modal">
      <div class="modal" @click.stop>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['modal']
}
</script>

<style lang="scss" scoped>
.modal-background {
  font-family: "Roboto Mono", monospace, "openhuninn", "Noto Sans TC",
    sans-serif;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1002;
  background-color: #000000cc;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  .modal {
    width: 60%;
    max-width: 600px;
    height: 60vh;
    min-height: 300px;
    background-color: #fff;
    border-radius: 20px;
    box-sizing: border-box;
    transition: transform 0.3s ease-in-out;
  }
}
.fade-enter-from,
.fade-leave-to {
  background-color: #00000000;
  .modal {
    transform: translateY(60vh);
  }
}
.fade-enter-to,
.fade-leave-from {
  background-color: #000000cc;
  .modal {
    transform: translateY(0);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: background 0.3s ease;
}
</style>