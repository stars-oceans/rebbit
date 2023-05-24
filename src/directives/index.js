// 引入 vueUse 函数库
import { useIntersectionObserver } from '@vueuse/core'
export default {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // vueUse 函数来判断 我们自定义指令的元素是否在视口区域
        const { stop } =    useIntersectionObserver(
          el,
        ([{ isIntersecting }]) => {
            // 当我们的 isIntersecting 为true,我们就给 页面上的 src 传值
            if (isIntersecting) {
              setTimeout(()=>{  // 为了自己演示 加了 个延时器
              el.src = binding.value
              },500)
              // 当鼠标经过的位置 停止加载
              stop()
            }
          },
        )
      }
    })
  }
}
