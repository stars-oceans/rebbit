// 引入初始化样式文件
import '@/styles/common.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 引入 vueUse 函数库
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)


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

app.directive('img-lazy', {
  mounted(el, binding) {
    // vueUse 函数来判断 我们自定义指令的元素是否在视口区域
    const a = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        // 当我们的 isIntersecting 为true,我们就给 页面上的 src 传值
        if(isIntersecting){
          // setTimeout(()=>{  // 为了自己演示 加了 个延时器
            el.src = binding.value
          // },500)
        }
      },
    )
  }
})
