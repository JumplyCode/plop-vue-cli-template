import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// vant-ui按需引用
import {Button} from 'vant'
[Button].forEach(e=>{
  Vue.use(e)
})

// 内部组件整合，页面不用单独import组件，直接在模板使用即可
import integrate from "./components/index.js"
Vue.use(integrate)

// 接口api
import httpApi from './service/httpApi'
Vue.prototype.$axios = httpApi

// 常用方法
import utils from './assets/js/utils'
Vue.prototype.$utils = utils

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
