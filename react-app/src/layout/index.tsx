import { ReactElement } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

const Layout = (): ReactElement => {
  return (
    <>
      <nav>
        <ul className={styles.links}>
          {Array.from(Array(3).keys()).map((i) => (
            <li key={i}>
              <NavLink
                to={'/day-' + (i + 1)}
                className={({ isActive }): string => (isActive ? styles.active : '')}
              >
                Day {i + 1}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
