import { lazy } from 'react';

const Day1 = lazy(() => import('./Day1'));
const Day2 = lazy(() => import('./Day2'));
const Day3 = lazy(() => import('./Day3'));
const Day4 = lazy(() => import('./Day4'));

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
  {
    path: '/day-3',
    exact: true,
    component: Day3,
  },
  {
    path: '/day-4',
    exact: true,
    component: Day4,
  },
];
