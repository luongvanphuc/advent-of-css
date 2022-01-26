import React, { ReactNode, useState } from 'react';
import { Cart, Dish } from '../models';

const EMPTY_CART: Cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
};

export interface ICartContext {
  cart: Cart;
  addItem: (item: Dish) => void,
  decreaseItemQty: (itemId: string) => void,
}

export const CartContext = React.createContext<ICartContext>({
  cart: EMPTY_CART,
  addItem: () => null,
  decreaseItemQty: () => null,
});

export const CartProvider = (props: { children: ReactNode }): JSX.Element => {
  const [cart, setCart] = useState(EMPTY_CART);

  const generateId = (): string => Math.random().toString(36).substring(2, 9);

  const addItem = (item: Dish): void => {
    const existingItem = cart.items.find(i => i.dishId === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({
        id: generateId(),
        image: item.image,
        name: item.name,
        price: item.price,
        bgColor: item.bgColor,
        dishId: item.id,
        quantity: 1,
      });
    }

    refreshCart();
  };

  const removeItem = (itemId: string): void => {
    const itemIndex = cart.items.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
      cart.items.splice(itemIndex, 1);
    }
  };

  const decreaseItemQty = (itemId: string): void => {
    const matchedItem = cart.items.find(i => i.id === itemId);

    if (matchedItem) {
      if (matchedItem.quantity > 1) {
        matchedItem.quantity -= 1;
      } else {
        removeItem(itemId);
      }
    }

    refreshCart();
  };

  const refreshCart = (): void => {
    const subtotal = cart.items.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);

    const tax = subtotal * 0.0975;
    const total = subtotal + tax;

    setCart({
      ...cart,
      subtotal, tax, total,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, decreaseItemQty }}>
      {props.children}
    </CartContext.Provider>
  );
};
