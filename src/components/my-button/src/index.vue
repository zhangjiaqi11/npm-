<template>
  <div>
    my-button
    <el-button
      :type="type"
      @click="fn"
    >
      1111
    </el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/button.css'
export default {
  name: 'MyButton',
  components: {
    ElButton: Button
  },
  props: {
    type: {
      default: '',
      type: String
    }
  },
  methods: {
    fn (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>
