import { getCategoryApi } from '@/apis/layout.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  // 列表数据
  let categoryList = ref([])
  // 获取列表数据的请求方法
  const gerCategory = async function () {
    let data = await getCategoryApi()
    categoryList.value = data.result
    
    console.log(categoryList.value);
  }

  return { categoryList, gerCategory }
}
)
