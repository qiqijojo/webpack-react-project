import { lazy } from 'react';

const Home = lazy(() => import('pages/home/index'));
const PageOne = lazy(() => import('pages/pageOne/index'));
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'pageOne',
        path: '/pageOne',
        component: PageOne
    }
];
export default routes;
