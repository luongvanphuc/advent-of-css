import { Button } from 'antd';

import { ReactComponent as ChevronLeft } from '../../images/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../images/chevron-right.svg';
import { CartItem } from '../../models';
import styles from './styles.module.scss';

const CartListItem = ({ item, onIncrease, onDecrease }: Props): JSX.Element => {
  return (
    <div className={styles.item}>
      <img className={styles.item__img} src={item.image} />
      <div>
        <div className={styles.item__name}>
          {item.name}
        </div>
        <div className={styles.item__price}>
          ${item.price}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-32">
            <Button
              className={styles.item_btnAdjust}
              type="primary"
              shape="circle"
              icon={<ChevronLeft />}
              onClick={(): void => onDecrease(item)}
            />
            <span>{item.quantity}</span>
            <Button
              className={styles.item_btnAdjust}
              type="primary"
              shape="circle"
              icon={<ChevronRight />}
              onClick={(): void => onIncrease(item)}
            />
          </div>
          <span className={styles.item__totalPrice}>
            ${item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

type Props = {
  item: CartItem;
  onIncrease: (item: CartItem) => void;
  onDecrease: (item: CartItem) => void;
}

export { CartListItem };
