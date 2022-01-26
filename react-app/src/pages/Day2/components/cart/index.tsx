import { useCartContext } from '../../providers/cart.hook';

const Cart = (): JSX.Element => {
  const cartContext = useCartContext();
  console.log(cartContext.cart);

  return (
    <div className="mb-8">
    </div>
  );
};

export { Cart };
