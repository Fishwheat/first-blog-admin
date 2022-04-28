import RoutesEnum from '@/enums/routes.enums';

const personalRoutes = {
  path: 'personal',
  name: RoutesEnum.PERSONAL,
  component: () => import('./pages/index.vue'),
  children: [],
  meta: {
    page: RoutesEnum.PERSONAL,
  },
};

export default personalRoutes;
