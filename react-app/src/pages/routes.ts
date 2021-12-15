import { lazy } from 'react';

const Day1 = lazy(() => import('./Day1'));
const Day2 = lazy(() => import('./Day2'));

export default [
  {
    path: '/day-1',
    exact: true,
    component: Day1,
  },
  {
    path: '/day-2',
    exact: true,
    component: Day2,
  },
];
