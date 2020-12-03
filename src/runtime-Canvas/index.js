/*
 * @Description: 
 * @Company: 嘉实基金
 * @Author: zhanggx01
 * @Date: 2020-12-03 20:32:42
 * @LastEditors: zhanggx01
 * @LastEditTime: 2020-12-03 20:40:52
 */
import { createRenderer } from '@vue/runtime-core'
import {Graphics, Text} from 'pixi.js'
const renderer = createRenderer({
  createElement(type) {
    console.log('type:', type)
    // 基于type 创建 基于 canvas 元素
    // 创建矩形
    let element
    if (type === 'rect') {
      element = new Graphics()
      element.beginFill(0xff0000)
      element.drawRect(0, 0, 500, 500)
      element.endFill()
    } else if (type === 'circle') {
      element = new Graphics()
      element.beginFill(0xffff00)
      element.drawCircle(0, 0, 50)
      element.endFill()
    }
    return element
  },
  patchProp (el, key, prevValue, nextValue) {
    // pixi
    if (key === 'x') {
      el.x = nextValue
    }
    if (key === 'y') {
      el.y = nextValue
    }
  },
  setElementText(node, text) {
    const cText = new Text(text)
    node.addChild(cText)
  },
  createText(text) {
    return new Text(text)
  },
  insert(el, parent) {
    console.log('el parent:', el, parent)
    parent.addChild(el)
  }
})

export function createApp (rootComponent) {
  return renderer.createApp(rootComponent)
}
