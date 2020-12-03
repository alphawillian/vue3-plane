/*
 * @Description: circle.js
 * @Company: 嘉实基金
 * @Author: zhanggx01
 * @Date: 2020-12-03 20:27:04
 * @LastEditors: zhanggx01
 * @LastEditTime: 2020-12-03 20:29:07
 */
import {defineComponent, h} from '@vue/runtime-core'

export default defineComponent({
  render () {
    return h('circle', {x: 200, y: 200})
  }
})