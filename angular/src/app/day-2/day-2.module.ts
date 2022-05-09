import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Day2Component } from './day-2.component';



@NgModule({
  declarations: [Day2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Day2Component,
    }]),
  ],
  exports: [Day2Component]
})
export class Day2Module { }
