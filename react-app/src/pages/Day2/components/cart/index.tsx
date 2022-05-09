import { CartItem } from '../../models';
import { useCartContext } from '../../providers/cart.hook';
import { CartListItem } from '../cart-list-item';
import styles from './styles.module.scss';

const Cart = (): JSX.Element => {
  const { cart, addItem, decreaseItemQty } = useCartContext();

  const handleAddItem = (item: CartItem): void => {
    addItem(item);
  };

  const handleDecreaseQty = (item: CartItem): void => {
    decreaseItemQty(item.id);
  };

  return (
    <div className="mx-8 mb-10">
      {cart.items.length === 0 && <p>Your cart is empty.</p>}
      {cart.items.length > 0 &&
        <>
          <div>
            {cart.items.map(item =>
              <div className={styles.cartItem}>
                <CartListItem
                  item={item}
                  key={item.id}
                  onIncrease={handleAddItem}
                  onDecrease={handleDecreaseQty}
                />
              </div>
            )}
          </div>
          <div className={styles.totalSection}>
            <span className={styles.totalSection__label}>Subtotal:</span>
            <span className={styles.totalSection__price}>${cart.subtotal.toFixed(2)}</span>
            <span className={styles.totalSection__label}>Tax:</span>
            <span className={styles.totalSection__price}>${cart.tax.toFixed(2)}</span>
            <span className={styles.totalSection__label}>Total:</span>
            <span className={`${styles.totalSection__price} ${styles.totalSection__totalPrice}`}>${cart.total.toFixed(2)}</span>
          </div>
        </>
      }
    </div>
  );
};

export { Cart };
