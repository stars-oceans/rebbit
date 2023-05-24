import http from '@/utils/http'


export function getCategoryApi(id){
  return http({
    method : 'get',
    url : '/category',
    params :{
      id 
    }
  })
}