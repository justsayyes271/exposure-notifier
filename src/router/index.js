import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/scan',
    name: 'Scan',
    component: () => import(/* webpackChunkName: "scan" */ '../views/Scan.vue'),
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import(/* webpackChunkName: "scan" */ '../views/Apply.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;