import http from '@/utils/http.js'

 export function getData(){
  return  http({
    url : '/home/category/head',
    method : 'GET'
  })
}