import { ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

const Layout = (): ReactElement => {
  return (
    <>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link className="link" to="/day-1">Day 1</Link>
          </li>
          <li>
            <Link className="link" to="/day-2">Day 2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
