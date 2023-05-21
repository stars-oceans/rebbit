import http from "@/utils/http.js";

 export function getCategoryApi() {
  return http({
    method: 'get',
    url: '/home/category/head',
  })
}