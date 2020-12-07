/*
 * @Description: game.js
 * @Company: 嘉实基金
 * @Author: zhanggx01
 * @Date: 2020-12-03 20:40:04
 * @LastEditors: zhanggx01
 * @LastEditTime: 2020-12-07 20:52:38
 */
import {Application} from 'pixi.js'
// 初始化game
export const game = new Application({
  width: 750,
  height: 1080
})
document.body.append(game.view)
export function getRootContainer () {
  // debugger
  return game.stage
}