// 封装 banner 轮播图业务相关代码
// 导入接口
import { getBannerApi } from '@/apis/category.js'
import { ref } from 'vue'
 export function useBanner(){

  // 定义banner数据存储地
let bannerList = ref([])
const getBanner = async function () {
  let res = await getBannerApi()
  //  赋值
  bannerList.value = res.result
}

return { bannerList, getBanner}
}