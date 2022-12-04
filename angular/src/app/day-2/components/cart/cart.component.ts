import { Component, ChangeDetectionStrategy, TrackByFunction } from '@angular/core';
import { CartItem } from '../../models';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  public cart$ = this.cartService.cart$;

  constructor(private cartService: CartService) { }

  public handleAddItem(item: CartItem): void {
    this.cartService.addItem(item);
  };

  public handleDecreaseQty(item: CartItem): void {
    this.cartService.decreaseItemQty(item.id);
  };

  public trackByFn: TrackByFunction<CartItem> = (_, item: CartItem): CartItem['id'] => item.id;
}
