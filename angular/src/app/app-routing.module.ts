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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
