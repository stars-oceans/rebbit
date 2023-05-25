// 封装 分类业务相关代码
import { getCategoryApi } from '@/apis/category'
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

// 按需导出
 export function useCategory() {
  const route = useRoute()
  // 存数据的响应式变量
  let categoryDate = ref({})

  // TODO: 路由钩子实现
  onBeforeRouteUpdate((to, from) => {
    // console.log(to);
    getCategory(to.params.id)
  })
  // 请求的函数
  //                  = 号后面是 默认值，就是说如果传了 就是 id 不传就是 route.params.id
  const getCategory = async (id = route.params.id) => {
    // 利用 route 给参数
    const res = await getCategoryApi(id)
    categoryDate.value = res.result
    // console.log(categoryDate.value);
  }
 
  return  { categoryDate, getCategory }
}