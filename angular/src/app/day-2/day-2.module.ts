import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { Day2Component } from './day-2.component';
import { CardComponent } from './components/card/card.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { DishListItemComponent } from './components/dish-list-item/dish-list-item.component';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [Day2Component, CardComponent, DishListComponent, CartComponent, CartListItemComponent, DishListItemComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    RouterModule.forChild([{
      path: '',
      component: Day2Component,
    }]),
  ],
  providers: [CartService],
  exports: [Day2Component]
})
export class Day2Module { }
