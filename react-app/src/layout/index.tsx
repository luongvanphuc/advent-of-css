import { ReactElement, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

import styles from './layout.module.scss';
import _appInfo from 'src/meta/app-info.json';
import { AppInfo } from 'src/meta/app-info.model';

const Layout = (): ReactElement => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [dayInfo, setDayInfo] = useState<string[]>([]);
  const appInfo: Array<string> = _appInfo.app?.info;
  const location = useLocation();

  const openDrawer = (): void => {
    const day = location.pathname.split('-')[1];
    const dayInfo = (_appInfo as AppInfo)[`day${day}`]?.info;

    setDayInfo(dayInfo);
    setDrawerOpen(true);
  };

  const closeDrawer = (): void => {
    setDrawerOpen(false);
  };

  const getInfoList = (data: Array<string>): ReactElement => {
    return (
      <>
        {data?.map((text, i) => (
          <li key={i}>
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <nav>
        <ul className={styles.links}>
          {Array.from(Array(4).keys()).map((i) => (
            <li key={i}>
              <NavLink
                to={'/day-' + (i + 1)}
                className={({ isActive }): string =>
                  isActive ? styles.active : ''
                }
              >
                Day {i + 1}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        className={styles.btnInformation}
        type="primary"
        shape="circle"
        icon={<QuestionOutlined />}
        size="middle"
        onClick={(): void => openDrawer()}
      />

      <Drawer
        title="Information"
        closable={false}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerOpen}
      >
        <ul className={styles.infoList}>{getInfoList(dayInfo)}</ul>
        <hr className="my-4" />
        <ul className={styles.infoList}>{getInfoList(appInfo)}</ul>
      </Drawer>

      <Outlet />
    </>
  );
};

export default Layout;
