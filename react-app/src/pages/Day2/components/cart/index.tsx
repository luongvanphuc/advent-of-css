import { useCartContext } from '../../providers/cart.hook';
import { CartListItem } from '../cart-list-item';

const Cart = (): JSX.Element => {
  const { cart } = useCartContext();

  return (
    <div className="mx-8">
      {cart.items.length === 0 && <p>Your cart is empty.</p>}
      {cart.items.length > 0 && cart.items.map(item => <CartListItem item={item}/>)}
    </div>
  );
};

export { Cart };
