import Vue from 'vue'
import App from './App.vue'
import { MyButton, MySwitch } from './components/index'
Vue.use(MyButton)
Vue.use(MySwitch)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
