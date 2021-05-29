<template>
  <div class="container">
    <div>已完成{{isComplete}} / 全部{{all }}</div>
    <button v-if="isComplete > 0" @click="clear">清除已完成</button>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'NavFooter',
  props: {},
  components: {},
  setup(props, ctx) {
    let isComplete = ref(1)
    let all = ref(3)
    let clear = () => {
      console.log('clear')
    }
    return {
      isComplete,
      all,
      clear
    }
  }

})

</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    button{
      margin-left: 10px;
    }
  }
</style>
