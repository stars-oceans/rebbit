let routes = [
  {
    // 默认 二级路由 配置为空
    path: '',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('@/views/Category/index.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/Settings/index.vue')
  },
]
export default routes
