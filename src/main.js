import Vue from 'vue'
import App from './App.vue'

// 引入ui组件
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css'
// Vue.use(ElementUI)

// import MyWavesurfer from 'my-wavesurfer-test'
// import 'my-wavesurfer-test/my-wavesurfer.css'
// Vue.use(MyWavesurfer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
