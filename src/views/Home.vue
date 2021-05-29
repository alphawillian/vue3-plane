<template>
  <div class="home">
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer> -->
    <div @click="clickNum">{{num}}</div>
    <div @click="clickNum1">{{num1}}</div>
    <div>{{addNum}}</div>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {defineComponent, ref, reactive, toRefs, computed} from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props, ctx) {
    let num = ref(10)
    let name = ref('william')
    let arr = ref(['a', 'b', 'c'])
    let data = reactive({
      num1: 11,
      name1: 'jack',
    })
    let clickNum = () => {
      console.log(num.value ++)
    }
    let clickNum1 = () => {
      console.log(data.num1 ++)
    }
    let addNum = computed(() => {
      return num.value + data.num1
    })
    return {
      num,
      name,
      arr,
      // data,
      ...toRefs(data),
      clickNum,
      clickNum1,
      addNum
    }
  }

})

</script>
<style lang="scss" scoped>
  
</style>
