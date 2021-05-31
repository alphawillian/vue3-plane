<template>
  <div class="home">
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer> -->
    <div @click="clickNum">{{num}}</div>
    <div @click="clickNum1">{{num1}}</div>
    <div>{{addNum}}</div>
    <button @click="goto">goto</button>
    <div>{{list}}</div>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {defineComponent, ref, reactive, toRefs, computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
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
    let router = useRouter()
    let route = useRoute()
    console.log(router)
    console.log(route)
    console.log(route.query)
    let goto = () => {
      router.push({name: 'About', query: {name: name.value, num: num.value}})
    }
    let store = useStore()
    console.log(store)
    let list = computed(() => {
      return store.state.list
    })
    return {
      num,
      name,
      arr,
      // data,
      ...toRefs(data),
      clickNum,
      clickNum1,
      addNum,
      goto,
      list
    }
  }

})

</script>
<style lang="scss" scoped>
  
</style>
