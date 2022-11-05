<template>
  <div>
    my-switch8765
    <el-switch v-model="myValue" />
  </div>
</template>
<script>

import { Switch } from 'element-ui'
import 'element-ui/lib/theme-chalk/switch.css'
export default {
  name: 'MySwitch',
  components: {
    ElSwitch: Switch
  },
  props: {
    value: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    myValue: {
      get () {
        return this.value
      },
      set (val) {
        console.log(val)
        this.$emit('update:value', val)
      }
    }
  }
}
</script>

<style>

</style>
