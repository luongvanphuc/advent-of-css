import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Day1 from '../pages/Day-1.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Day 1',
    component: Day1,
  },
  {
    path: '/day-2',
    name: 'Day 2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'day-1' */ '../pages/Day-2.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
