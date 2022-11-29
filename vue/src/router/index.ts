import { createRouter, createWebHistory } from 'vue-router';
import Day1 from '@/pages/day-1/Day-1.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/day-1',
    },
    {
      path: '/day-1',
      name: 'Day 1',
      component: Day1,
    },
    {
      path: '/day-2',
      name: 'Day 2',
      component: () => import('@/pages/day-2/Day-2.vue'),
    },
    {
      path: '/day-3',
      name: 'Day 3',
      component: () => import('@/pages/day-3/Day-3.vue'),
    },
    {
      path: '/day-4',
      name: 'Day 4',
      component: () => import('@/pages/day-4/Day-4.vue'),
    },
  ],
});

export default router;
