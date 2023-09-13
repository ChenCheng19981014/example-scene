/**
 * @description 路由导航守卫
 */
import bus from "@/lib/bus"
import store from "../store"
export default (router) => {

    router.beforeEach(async (to, from, next) => {
        window.bus = bus
        // bus.$emit("sceneRunning1", false)
        // bus.$emit("sceneRunning2", false)
        bus.$emit("set-state-dialogThree", false)
        bus.$emit('isShowCar', false)
        bus.$emit('closeAllSprite')
        store.state.isInner = ''
        next()
    })
}