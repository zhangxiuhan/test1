import Vue from 'vue'
import App from './App.vue'
import './filter'//引入注册filter中的index里的过滤器

// 是否显示更多的日志提示信息， false:不显示true:显示
Vue.config.productionTip = false

new Vue({
  //配置vue框架显示的第一 个画面
  render: h => h(App),
}).$mount('#app')
