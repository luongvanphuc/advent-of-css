import { DishListItem } from '..';
import { Dish } from '../../models';
import { useCartContext } from '../../providers/cart.hook';

const DishList = ({ items }: Props): JSX.Element => {
  const { addItem } = useCartContext();

  const handleAddItemToCart = (item: Dish): void => {
    addItem(item);
  };

  return (
    <div className="mb-8">
      {items.map(dish => (
        <DishListItem item={dish} key={dish.id} onAddToCart={handleAddItemToCart} />
      ))}
    </div>
  );
};

type Props = {
  items: Array<Dish>;
}

export { DishList };
