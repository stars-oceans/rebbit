import http from "@/utils/http.js";

 export function getCategoryApi() {
  return http({
    method: 'get',
    url: '/home/category/head',
  })
}

export function getBannerApi() { 
  return http({
    method : 'get',
    url : 'home/banner'
  })
}