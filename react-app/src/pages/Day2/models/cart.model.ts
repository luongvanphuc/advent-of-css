import { Dish } from './dish.model';

export interface Cart {
  items: Array<CartItem>;
  subtotal: number;
  tax: number;
  total: number;
}

export interface CartItem extends Dish {
  dishId: string;
  quantity: number;
}
