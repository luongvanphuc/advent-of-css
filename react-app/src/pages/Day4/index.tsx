import React, { useRef, ReactElement, useEffect } from 'react';

import { Rows } from './models/constant';
import styles from './styles.module.scss';
import Key, { KeyMethods } from './components/key';

const Day4 = (): ReactElement => {
  const keyRefs = useRef<(KeyMethods | null)[]>([]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return function cleanup(): void {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = (e: KeyboardEvent): void => {
    const keyEl = keyRefs.current.find(k => k?.getCode() === e.code);
    keyEl?.jiggle();
  };

  return (
    <div className={styles.wrapper}>
      {Rows.map((row, index) => (
        <div className={styles.row + ' ' + styles[`row--${index + 1}`]} key={index}>
          {row.map(key => (
            <Key
              ref={(el): KeyMethods | null => {
                keyRefs.current.push(el);
                return el;
              }}
              key={key.code}
              data={key}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Day4;
