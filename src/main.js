import Vue from "vue"
import App from "./App"

//vuex & router
import router from "./router"
import store from "./store"
//mock数据
// import "./mock"
//element ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);

import "./directives"

//公共样式
import "./design/index.scss"

//公共组件
import "./components"

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
})
