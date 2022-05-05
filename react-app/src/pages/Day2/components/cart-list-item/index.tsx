import { Dish } from '../../models';
import styles from './styles.module.scss';

const CartListItem = ({ item }: Props): JSX.Element => {
  return (
    <div className={styles.dish}>
      <img className={styles.dish__img} src={item.image} />
      <div>
        <div className={styles.dish__name}>
          {item.name}
        </div>
        <div className={styles.dish__price}>
          ${item.price}
        </div>
      </div>
    </div>
  );
};

type Props = {
  item: Dish;
}

export { CartListItem };
