import { lazy } from 'react';

const Home = lazy(() => import('pages/home/index'));
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    }
];
export default routes;
