<template>
  <div>
    <input
      placeholder="请输入任务名称"
      v-model="value"
      @keydown.enter="enter"
    />
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'NavHeader',
  props: {},
  components: {},
  setup(props, ctx) {
    let value = ref('')
    let enter = () => {
      console.log('e')
    }
    return {
      value,
      enter
    }
  }

})

</script>
<style lang="scss" scoped>
  input{
    margin-bottom: 16px;
  }
</style>
