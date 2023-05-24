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

export function getBannerApi(){
  return http({
    method : 'get',
    url:'/home/banner',
    params:{
      distributionSite : '2'
    }
  })
}