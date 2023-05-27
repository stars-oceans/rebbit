import http from '@/utils/http'

export function getDetail (id){
  return http({
    method : 'get',
    url : '/goods',
    params:{
      id
    }
  })
}