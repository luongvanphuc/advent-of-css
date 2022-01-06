import { DishListItem } from '..';
import { Dish } from '../../models';

const DishList = ({ items }: Props): JSX.Element => {
  return (
    <div className="mb-8">
      {items.map(dish => (
        <DishListItem item={dish} key={dish.id} />
      ))}
    </div>
  );
};

type Props = {
  items: Array<Dish>;
}

export { DishList };
