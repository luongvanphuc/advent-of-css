import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {
  @Input()
  public item: CartItem | undefined;

  @Output()
  public onIncrease = new EventEmitter<void>();

  @Output()
  public onDecrease = new EventEmitter<void>();
}
