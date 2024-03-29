import { Component, ChangeDetectionStrategy, Input, TrackByFunction } from '@angular/core';

import { Dish } from '../../models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishListComponent {

  @Input()
  public items: Array<Dish> = [];

  constructor(private cartService: CartService) { }

  public handleAddItemToCart(item: Dish): void {
    this.cartService.addItem(item);
  };

  public trackByFn: TrackByFunction<Dish> = (_, item: Dish): Dish['id'] => item.id;
}
