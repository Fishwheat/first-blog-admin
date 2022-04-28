import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RoutesEnum from '@/enums/routes.enums';
import AccMain from '@/views/acc-main/index.vue';
import homeRoutes from '@/modules/home/routes';
import personalRoutes from '@/modules/personal/routes';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RoutesEnum.ACCMAIN,
    component: AccMain,
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
});

export default router;
