// 获取 axios 请求
import { getSubApi } from '@/apis/category.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
/**
 * 导出二级分类的 响应式 数据 面包屑
 * @returns 
 */
export  function useSubList(){
const route = useRoute()
const subList = ref([])
 async function  getSub(){
     const data =  await getSubApi(route.params.id)
     subList.value = data.result;
     console.log(subList.value);
}
onMounted(()=>{
  getSub()
})

return { subList }
}