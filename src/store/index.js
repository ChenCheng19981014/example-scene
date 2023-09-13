/**
 * @description vue状态管理
 */

import store from "vuex";
import Vue from "vue";

Vue.use(store);

export default new store.Store({
    state: {
        rc: false,
        sceneNow: "all", //all  ground b1 b2
        isInner: "",
        innerType: "",
        innerType1:"normal",
        fitLayoutRatio: 0,
        // clickCheWei: '',
        onChangeRunSceneCallback: {},
        onResizeCallBack: {},
    },
    mutations: {
        setFitLayoutRatio(store, ratio) {
            store.fitLayoutRatio = ratio;
            Object.values(store.onResizeCallBack).map((fn) => fn(ratio));
        },
    },
    actions: {},
});
