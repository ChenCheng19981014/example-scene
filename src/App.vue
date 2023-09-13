<style lang="scss" scoped>
body {
  margin: 0 auto;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(35, 35, 35);
}

.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 4;
  background-image: url("./../public/assets/images/遮罩.png");
  display: none;
}

.totat {
  width: 140px;
  height: 51px;
  background: #00000099;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  left: 50%;
  top: 50%;
  border-radius: 4px;
}
</style>

<template>
  <div id="app" @dragstart.prevent @selectstart.prevent>
    <dialogThree></dialogThree>
    <fit-layout :width="1920" :height="1080">
      <div class="cover"></div>
      <Index></Index>
      <!-- <Threescene @load="isload = true"></Threescene> -->
      <router-view v-if="isload"></router-view>
    </fit-layout>
  </div>
</template>

<script>
import dialogThree from "./components/dialog/dialog.vue";
import bus from "@/lib/bus";
import Index from "./views/index";
export default {
  data() {
    return {
      isload: false,
      totat: false,
    };
  },
  created() {
    bus.$on("totat", () => {
      this.totat = true;
      bus.$emit("set-state-dialogThree", false);
      bus.$emit("closeAllSprite");
      setTimeout(() => {
        this.totat = false;
      }, 2000);
    });
  },
  components: {
    dialogThree,
    Index,
  },
  methods: {},
};
</script>
