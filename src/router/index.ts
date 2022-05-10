import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RoutesEnum from '@/enums/routes.enums';
import homeRoutes from '@/modules/home/routes';
import personalRoutes from '@/modules/personal/routes';
import ViewMain from '@/views/view-main/index.vue';
import { storage } from '@/helpers/storage';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/account',
    component: () => import('@/modules/account/pages/index.vue'),
    redirect: { name: RoutesEnum.LOGIN },
    children: [
      {
        path: 'login',
        name: RoutesEnum.LOGIN,
        component: () => import('@/modules/account/pages/login.vue'),
        meta: { auth: false },
      },
      {
        path: 'register',
        name: RoutesEnum.REGISTER,
        component: () => import('@/modules/account/pages/register.vue'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/',
    name: RoutesEnum.VIEWMAIN,
    component: ViewMain,
    children: [
      homeRoutes,
      personalRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // 根据有无token来判断是否进入home
  if (storage.value.token) {
    if (to.path === '/') {
      try {
        next({
          name: RoutesEnum.HOME,
        });
      } catch (error) {
        console.log(error);
      }
    }
    next();
  } else if (to.meta.auth === false) {
    // 假如没有token应该在account模块，此模块可能有多个页面（登录，注册，忘记密码等），此时当用户直接根据域名+后缀得让其跳转到对应页面
    next();
  } else {
    // 除此之外的只要是域名+任何后缀，都让其跳转到登录页
    next({ name: RoutesEnum.LOGIN });
  }
});

export default router;
