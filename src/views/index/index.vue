<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;

  .cover {
    width: 100%;
    height: 100%;
    background-image: url("./../../../public/assets/images/遮罩.png");
    background-size: 100% 100%;
  }
}
</style>

<template>
  <div class="index">
    <keep-alive>
      <!-- <Threescene></Threescene> -->
      <!-- <ThreeFactory></ThreeFactory> -->
      <!-- <ThreeProductionLine></ThreeProductionLine> -->
      <component :is="showShopName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Threescene from "./../../components/three-scene/index.vue";
import bus from "./../../lib/bus";
export default {
  name: "Index",
  data() {
    return {
      showShopName: "Threescene",
    };
  },
  created() {},
  components: {
    Threescene,
  },
  methods: {},

  mounted() {
    // 切换场景
    bus.$on("change-Scene", (name) => {
      this.showShopName = name;
      // 隐藏看板
      bus.$emit("set-state-dialogThree", false);
    });
  },
};
</script>
