import { lazy } from 'react';
import DefaultLayout from './layout/DefaultLayout';

const routerPrefix = '';
const routes = [
  {
    path: '/index',
    exact: true,
    component: lazy(() => import('./pages/Home')),
    title: '首页',
  },
  {
    path: '/setUp',
    exact: true,
    component: lazy(() => import('./pages/SetUp')),
    title: '可视化搭建',
  },
  {
    path: '/useForm',
    exact: true,
    component: lazy(() => import('./pages/UseFormDemo')),
    title: 'UseFormDemo',
  },
  {
    path: '/dndDemo',
    exact: true,
    component: lazy(() => import('./pages/DndDemo')),
    title: 'DndDemo',
  },
];

export default [
  {
    path: routerPrefix,
    component: DefaultLayout,
    routes,
  },
];

export const router = 'browserRouter';
