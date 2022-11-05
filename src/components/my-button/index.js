import myButton from './src'

myButton.install = function (Vue) {
  Vue.component(myButton.name, myButton)
}

export default myButton
