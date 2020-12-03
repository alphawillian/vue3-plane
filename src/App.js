/*
 * @Description: 
 * @Company: 嘉实基金
 * @Author: zhanggx01
 * @Date: 2020-12-03 18:47:54
 * @LastEditors: zhanggx01
 * @LastEditTime: 2020-12-03 20:31:24
 */
// vue3
import { defineComponent, h } from '@vue/runtime-core';
import Circle from './components/Circle'

// template -> render
export default defineComponent({
  render () {
    // <div></div>
    const vnode = h('rect', {x: 100, y: 100}, ['嘉实基金', h(Circle)])
    console.log('vnode:', vnode)
    return vnode
  }
})