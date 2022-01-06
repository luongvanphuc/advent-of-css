import { ReactElement } from 'react';

import { ReactComponent as BGLeft } from './images/bg__left.svg';
import { ReactComponent as BGTopRight } from './images/bg__top-right.svg';
import { ReactComponent as BGBottomRight } from './images/bg__btm-right.svg';
import { Card } from './components/card';
import { DishList } from './components/dish-list';
import { dishes } from './models';
import styles from './styles.module.scss';

const Day2 = (): ReactElement => {
  return (
    <div className={styles.wrapper + ' relative flex justify-center items-start gap-14'}>
      <BGLeft className={styles['bg-left'] + ' absolute left-0'} />
      <BGTopRight className="absolute top-0 right-0" />
      <BGBottomRight className={styles['bg-bottom-right'] + ' absolute bottom-0 right-0'} />

      <Card className={styles.card} title="To Go Menu">
        <DishList items={dishes} />
      </Card>

      <Card className={styles.card} title="Your Cart">

      </Card>
    </div>
  );
};

export default Day2;