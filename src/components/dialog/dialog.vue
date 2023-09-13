<template>
  <div class="dialogThree" ref="dialogThree" v-show="isShow">
    <div class="details" @click="showFactory"></div>
  </div>
</template>
<script>
import bus from "./../../lib/bus";
export default {
  name: "dialogThree",
  data() {
    return {
      isShow: false,
      img: null,
      item: null,
    };
  },
  computed: {},
  mounted() {
    // 设置位置
    bus.$on("set-position-dialogThree", this.setPosition);

    // 是否显示
    bus.$on("set-state-dialogThree", (isShow) => {
      this.isShow = isShow;

      console.log("显示吗？", isShow);
    });
  },
  watch: {
    isShow() {},
  },
  methods: {
    // 设置位置
    setPosition(el, ps) {
      let x = 0;
      let y = 0;
      let width = 0;
      let height = 0;

      if (ps) {
        x = ps.x;
        y = ps.y;
      } else {
        x = el.target.getBoundingClientRect().x;
        y = el.target.getBoundingClientRect().y;
        width = el.target.getBoundingClientRect().width;
        height = el.target.getBoundingClientRect().height;
      }

      let dom = document.querySelector(".dialogThree");

      dom.style.left = 2 + x + "px";

      dom.style.top = height + y + "px";

      // setTimeout(() => {
      //   this.addClose();
      // }, 10);
    },
    // 显示工厂
    showFactory() {
      this.isShow = false;

      // 切换到工厂
      bus.$emit("change-Scene", "ThreeFactory");
    },

    addClose() {
      let fun = (e) => {
        if (!this.$refs.dialogThree.contains(e.target)) {
          console.log("go");
          this.isShow = false;
          document.removeEventListener("click", fun);
        }
      };
      document.addEventListener("click", fun);
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  position: absolute;
  right: 12px;
  width: 50px;
  height: 25px;
  top: 6px;
  border-radius: 5px;
  // background-color: pink;
  cursor: pointer;
}
.dialogThree {
  width: 272px;
  height: 288px;
  position: absolute;
  z-index: 50;
  background-image: url("./../../../public/assets/images/弹框.png");
  background-size: 100% 100%;
  // background-color: pink;
}

.base-image {
  width: 280px;
}
</style>
