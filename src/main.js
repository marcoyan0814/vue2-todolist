import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate(){
    //加上全局事件總線 Global Event Bus
    Vue.prototype.$bus = this
  }
})

import "bootstrap/dist/js/bootstrap.js"