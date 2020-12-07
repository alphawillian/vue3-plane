/*
 * @Description: 入口文件
 * @Company: 嘉实基金
 * @Author: zhanggx01
 * @Date: 2020-12-03 18:47:54
 * @LastEditors: zhanggx01
 * @LastEditTime: 2020-12-07 20:52:09
 */

import App from './src/App.js'

import {createApp} from './src/runtime-Canvas/index'
import {getRootContainer} from './src/Game'



// App.vue
// 1. 创建根组件
// 2. 创建根容器
// createApp(rootComponent).mount(rootContainer)
createApp(App).mount(getRootContainer())