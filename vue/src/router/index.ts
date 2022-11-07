import { createRouter, createWebHistory } from 'vue-router';
import Day1 from '@/pages/day-1/Day-1.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Day 1',
      component: Day1,
    },
    {
      path: '/day-2',
      name: 'Day 2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/day-2/Day-2.vue'),
    },
    {
      path: '/day-3',
      name: 'Day 3',
      component: () => import('@/pages/day-3/Day-3.vue'),
    },
  ],
});

export default router;
