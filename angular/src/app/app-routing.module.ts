import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'day-1',
  }, {
    path: 'day-1',
    loadChildren: () => import('./day-1/day-1.module').then(m => m.Day1Module),
  }, {
    path: 'day-2',
    loadChildren: () => import('./day-2/day-2.module').then(m => m.Day2Module),
  }, {
    path: 'day-3',
    loadComponent: () => import('./day-3/day-3.component').then(c => c.Day3Component),
  }, {
    path: 'day-4',
    loadComponent: () => import('./day-4/day-4.component').then(c => c.Day4Component),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
