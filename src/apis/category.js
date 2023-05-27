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

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
   export function getSubCategoryAPI (data)  {
    return http({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }
