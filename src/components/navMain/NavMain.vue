<template>
  <div >
    <div v-for="(item, index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete">
        {{item.title}}
        <button class="del" @click="del(item, index)">删除</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'NavMain',
  props: {},
  components: {},
  setup(props, ctx) {
    let list = ref([
      {
        title: '吃饭',
        complete: false
      }, {
        title: '睡觉',
        complete: false
      }, {
        title: '写代码',
        complete: false
      }
    ])
    let del = (item, index) => {
      console.log(item, index)
    }
    return {
      list,
      del
    }
  }

})

</script>
<style lang="scss" scoped>
  .item{
    width: 160px;
    height: 35px;
    line-height: 35px;
    position: relative;
    button{
      position: absolute;
      right: 20px;
      top: 6px;
      display: none;
    }
    &:hover{
      background: #ddd;
      button{
        display: block;
      }
    }
  }
</style>
