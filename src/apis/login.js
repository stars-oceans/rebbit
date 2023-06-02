import http from '@/utils/http'

export function getLoginApi(data){
  return http({
       method : 'post',
       url : '/login',
       data
  })
}