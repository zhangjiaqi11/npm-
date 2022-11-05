<template>
  <div>
    my-switch
    <el-switch>
      1111
    </el-switch>
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
  }
}
</script>

<style>

</style>
