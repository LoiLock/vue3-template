import {RouteRecordRaw} from 'vue-router';
import appRoutes from '@/router/routes/app';

const routes: Array<RouteRecordRaw> = [
    ...appRoutes,
];

if (process.env.NODE_ENV !== 'production') {
    routes.push({
        path: '/styleguide',
        component: () => import('@/views/styleguide/Index.vue'),
    });
}

export default routes;
