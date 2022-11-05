import mySwitch from './src'

mySwitch.install = function (Vue) {
  Vue.component(mySwitch.name, mySwitch)
}

export default mySwitch
