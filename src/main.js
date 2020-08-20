import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters'
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上vue-router
  store // 使用上vuex
})
