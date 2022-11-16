import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { Dish } from '../../models';

@Component({
  selector: 'app-dish-list-item',
  templateUrl: './dish-list-item.component.html',
  styleUrls: ['./dish-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishListItemComponent {
  @Input()
  public item: Dish = {} as Dish;

  @Output()
  public onAddToCart = new EventEmitter<Dish>();
}
