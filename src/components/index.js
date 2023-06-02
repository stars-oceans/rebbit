// 将 components 中的所有组件进行全局化注册
// 通过插件的方式

// 导入 sku组件
import ImgView from './ImgView/ImgView.vue'
import XtxSku from './XtxSku/index.vue'

// 注册 然后导出 在 main.js 里面 app.use()
export default {
  install(app){
    // app.component('组件名', 组件对象)
    // 导入 sku组件
    app.component('FullXtxSku', XtxSku)

    // 导入ImgView 组件 进行全局注册
    app.component('FullImgView',ImgView)
  }
}