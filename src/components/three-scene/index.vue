<template>
  <div class="three-scene" ref="three-scene" onselectstart="return false;">
    <div @pointerdown="(e) => e.stopPropagation()" class="btn">
      <button
        @click="machineAnimation(i)"
        v-for="(i, _) in machineAnimationName"
      >
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script>
// chang 事件 实例
let sceneChange = null;
// 场景
let scene = null;
import Engine from "run-scene-v2";
import store from "../../store";
import * as THREE from "three";
import { fn } from "./Change";
import bus from "./../../lib/bus";
import router from "../../router";
const { RunScene, Utils } = Engine;
export default {
  name: "Threescene",
  components: {},
  data() {
    return {
      machineAnimationName: [
        "拿取小圆",
        "拿取大圆",
        "拿取方块",
        "放回小圆",
        "放回大圆",
        "复位",
        "初始化",
        "乱序2",
        "乱序3",
      ],
      path:
        // "http://192.168.3.8:8080/file?path=project/linkpoint/&key=202308141020125699171001202342",
        // "http://192.168.3.8:8080/file?path=project/linkpoint/&key=202205191619488629191001202234",
        "./assets/s.lt",
    };
  },
  async mounted() {
    const runScene = await this.loadScene(this.path);
    // 加载场景

    // 打印点击的模型接口
    bus.$on("logClickModel", this.logClickModel);

    // 场景加载完回调
    runScene.on("loaded", () => {
      this.resize(store.state.fitLayoutRatio, scene);

      this.$refs["three-scene"].classList.add("show");

      this.$emit("load");

      fn(
        scene,
        {
          Utils,
          bus,
          Three: THREE,
          store,
        },
        {}
      );

      this.onDone();
    });

    // 场景运行状态
    bus.$on("sceneRunning1", (isRuning) => {
      this.isRuning = isRuning;
    });

    // bus.$emit("blueprintFn", "运行产线");
  },
  methods: {
    // 机器动画
    machineAnimation(name) {
      bus.$emit("blueprintFn", name);
    },
    // 加载场景
    loadScene(path) {
      scene = new RunScene({
        // render2: true,
        // render3: true,
        renderConfig: {
          // 是否允许设置模型位置后自动渲染最新效果
          matrixAutoUpdate: true,
          scriptFrame: 60,
          event: {
            ignores: ["resize"],
          },
        },
      }).load({
        path: path,
        dom: this.$refs["three-scene"],
      });

      scene.setSize(3040, 1040);

      return scene;
    },

    openDialog(item, event, type) {
      this.$store.state.innerType1 = type.split("_")[0];
      scene?.cb.controls.change.add("setDialogPosition", () => {
        if (!this.isRuning) return;
        bus.$emit("set-position-dialogThree", item, event);
      });

      // 设置 唯一dom位置
      bus.$emit("set-position-dialogThree", item, event);

      bus.$emit("set-state-dialogThree", true);
    },

    // 自适应
    resize: (x, runScene) => {
      let map = runScene.assetsEx.engineDom.getBoundingClientRect();
      // runScene.setSize(map.width / x, map.height / x);
      runScene.setSize(1920, 1080);
    },
    // 加载完回调
    onDone() {
      // console.log("场景加载完毕~");
    },
    // 快照
    snapshot(name) {
      bus.$emit("snapShotFn", name);
    },
    // 打印点击到的模型
    logClickModel(model) {
      console.log("点击的模型为:", model.name);
    },
  },
  // 场景自带销毁
  destroyed() {
    sceneChange && sceneChange.dispose();
  },
};
</script>

<style lang="scss" scoped>
// 场景
.three-scene {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: black;
  pointer-events: auto;
}

.panorama {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 26px;
  z-index: 30;
  width: 113px;
  height: 50px;
  background-image: url("./../../../public/assets/images/全景悬停.png");
  background-size: 100% 100%;
}

.panorama:hover {
  // background-image: url("./../../../public/assets/images/全景悬停.png");
}

.three-scene .btn {
  position: absolute;
  z-index: 20;
}

.three-scene .show {
  opacity: 1 !important;
}

.three-scene .none {
  opacity: 0 !important;
}

.three-scene .block {
  display: block !important;
}

.showOpacity {
  opacity: 1 !important;
}
</style>
