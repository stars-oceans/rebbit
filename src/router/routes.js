let routes = [
  {
    // 默认 二级路由 配置为空
    path: '',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  // 一级分类
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('@/views/Category/index.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/Settings/index.vue')
  },
  // 二级分类
  {
    path: '/category/sub/:id',
    name: 'subCategory',
    component: () => import('@/views/SubCategory/index.vue'),
  },
  // 详情页
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail/index.vue'),
  }
]
export default routes
