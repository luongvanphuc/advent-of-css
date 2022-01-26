import { Button } from 'antd';

import { Dish } from '../../models';
import styles from './styles.module.scss';

const DishListItem = ({ item, onAddToCart }: Props): JSX.Element => {
  return (
    <div className={styles.dish}>
      <div className={styles.dish__inner} style={{ background: item.bgColor }}>
        <img className={styles.dish__img} src={item.image} />
        <div className="relative pt-6">
          <div className={styles.dish__name}>
            {item.name}
          </div>
          <div className={styles.dish__price}>
            ${item.price}
          </div>
          <Button className={styles['dish__btn-add']} type="primary" shape="round" size="middle" onClick={(): void => onAddToCart(item)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

type Props = {
  item: Dish;
  onAddToCart: (item: Dish) => void,
}

export { DishListItem };
