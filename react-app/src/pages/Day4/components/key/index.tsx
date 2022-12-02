import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react';

import { Key as KeyModel } from '../../models/model';
import styles from './styles.module.scss';

export type KeyMethods = {
  jiggle: () => void;
  getCode: () => KeyModel['code'];
}

const Key: ForwardRefRenderFunction<KeyMethods, Props> = (props, ref) => {
  const keyRef = useRef<HTMLElement>(null);

  const jiggle = (): void => {
    if (!keyRef.current) {
      return;
    }

    const keyEl = keyRef.current;

    keyEl.classList.add(styles.jiggling);

    setTimeout(() => {
      keyEl.classList.remove(styles.jiggling);
    }, 500);
  };

  const getCode = (): KeyModel['code'] => props.data.code;

  useImperativeHandle(ref, (): KeyMethods => ({
    jiggle,
    getCode,
  }));

  return (
    <span className={styles.key} ref={keyRef}  style={{ color: props.data?.color }} onClick={jiggle}>
      { props.data?.char }
    </span>
  );
};

interface Props {
  data: KeyModel,
}

export default forwardRef(Key);
