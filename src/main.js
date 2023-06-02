// 引入初始化样式文件
import '@/styles/common.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 引入我们的懒加载插件
import imgLazy from './directives/index'

// 引入全局组件
import componentsPlugin from '@/components/index'

const app = createApp(App)
app.use(componentsPlugin)
app.use(imgLazy)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)




app.mount('#app')

// 自定义指令
// app.directive('指令名', {
//   // 钩子函数
//   mounted (el, binding){
//     // el : 绑定 元素的 dom
//     // binding : 绑定的自定义指令的后面等于号后面的  值
//   }
// })

// 操作 Dom 我们选择使用自定义指令
// 全局使用的 方法属性和自定的东西，我们可以使用插件