import RoutesEnum from '@/enums/routes.enums';

const homeRoutes = {
  path: 'home',
  name: RoutesEnum.HOME,
  component: () => import('./pages/index.vue'),
  children: [],
  meta: {
    page: RoutesEnum.HOME,
  },
};

export default homeRoutes;
