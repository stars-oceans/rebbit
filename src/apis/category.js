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

/**
 * 二级列表
 */

export function getSubApi(id){ 
  return http({
    method : 'get',
    url : '/category/sub/filter',
    params : {
      id
    }
  })
}