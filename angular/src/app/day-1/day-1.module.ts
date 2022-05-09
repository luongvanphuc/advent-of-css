import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { Day1Component } from './day-1.component';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';



@NgModule({
  declarations: [Day1Component, SettingsModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzModalModule,
    NzFormModule,
    NzButtonModule,
    NzInputNumberModule,
    RouterModule.forChild([{
      path: '',
      component: Day1Component,
    }]),
  ],
})
export class Day1Module { }
