import { createRouter, createWebHashHistory } from 'vue-router';
// 导入动态路由
import itemRoutes from '@/router/routes';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue')
    }
  ],
  // 每次切换路由 滚动条都在顶部
  scrollBehavior() {
    return { top: 0 };
  }
})

itemRoutes.forEach((item) => {
  // console.log(item);
  router.addRoute('layout', item)
})

export default router
