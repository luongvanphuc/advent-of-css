import { useContext } from 'react';

import { CartContext, ICartContext } from './cart.provider';

export const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within CartProvider');
  }

  return context;
};
