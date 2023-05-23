import http from "@/utils/http.js";

/**
 * 获取商品信息导航和产品列表
 * @returns 
 */
 export function getCategoryApi() {
  return http({
    method: 'get',
    url: '/home/category/head',
  })
}

/**
 * 获取banner 图的api
 * @returns 
 */
export function getBannerApi() { 
  return http({
    method : 'get',
    url : 'home/banner'
  })
}


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return http({
    method : 'get',
    url : '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHotApi(){
  return http({
    method : 'get',
    url : '/home/hot'
  })
}