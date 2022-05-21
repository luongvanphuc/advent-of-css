import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cart, CartItem, Dish } from '../models';

const EMPTY_CART: Cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
};

@Injectable()
export class CartService {
  private _cart = new BehaviorSubject<Cart>(EMPTY_CART);
  public cart$ = this._cart.asObservable();

  private get items(): Array<CartItem> {
    return this._cart.value.items;
  }

  private generateId = (): string => Math.random().toString(36).substring(2, 9);

  public addItem(item: Dish | CartItem): void {
    const existingItem = this.items.find(i => i.dishId === item.id || i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        id: this.generateId(),
        image: item.image,
        name: item.name,
        price: item.price,
        bgColor: item.bgColor,
        dishId: item.id,
        quantity: 1,
      });
    }

    this.refreshCart();
  }

  public removeItem(itemId: string): void {
    const itemIndex = this.items.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  };

  public decreaseItemQty(itemId: string): void {
    const matchedItem = this.items.find(i => i.id === itemId);

    if (matchedItem) {
      if (matchedItem.quantity > 1) {
        matchedItem.quantity -= 1;
      } else {
        this.removeItem(itemId);
      }
    }

    this.refreshCart();
  };

  private refreshCart(): void {
    const subtotal = this.items.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);

    const tax = subtotal * 0.0975;
    const total = subtotal + tax;

    this._cart.next({
      ...this._cart.value,
      subtotal, tax, total,
    });
  };
}
