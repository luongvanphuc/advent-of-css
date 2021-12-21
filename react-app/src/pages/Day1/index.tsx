import { CSSProperties, ReactElement, useEffect, useRef, useState } from 'react';
import { FormInstance, InputNumber, Modal, Form } from 'antd';

import { ReactComponent as DropSVG } from './drop-svg.svg';
import { ReactComponent as GearIcon } from 'src/assets/icons/gear.svg';

import styles from './day1.module.scss';

const Day1 = (): ReactElement => {
  const MAX_SECONDS = 3599; // 59:59 (m:s)
  const formRef = useRef<FormInstance>(null);
  const [ringColor, setRingColor] = useState('#900a0a');
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [totalInSeconds, setTotalInSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [duration, setDuration] = useState(0);
  const [second, setSecond] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (totalInSeconds >= 1) {
      refreshNumbers();
    } else if (animating) {
      finish();
      clearInterval(timer as NodeJS.Timeout);
    }
  }, [totalInSeconds, animating]);

  const handleSubmitSetting = (): void => {
    const { minutes = 0, seconds = 0 } = formRef.current?.getFieldsValue();
    const duration = minutes * 60 + seconds;
    setTotalInSeconds(Math.min(MAX_SECONDS, duration));
    setDuration(duration);
    hideModal();
  };

  const toggleTimer = (): void => {
    if (!animating && totalInSeconds > 0) {
      setAnimating(true);
      setRingColor('#900a0a');

      const t = setInterval(() => {
        setTotalInSeconds(prev => prev - 1);
      }, 1000);
      setTimer(t);
    } else {
      reset();
    }
  };

  const reset = (): void => {
    setTotalInSeconds(0);
    setDuration(0);
    setMinute(0);
    setSecond(0);
    setAnimating(false);
  };

  const finish = (): void => {
    reset();
    setRingColor('green');
    Modal.info({ title: 'Time\'s up' });
  };

  const refreshNumbers = (): void => {
    const timeValue = new Date(totalInSeconds * 1000)
      .toISOString()
      .substr(14, 5);
    const [m, s] = timeValue.split(':');

    setMinute(+m);
    setSecond(+s);
  };

  const hideModal = (): void => {
    setModalVisible(false);
  };

  const showModal = (): void => {
    setModalVisible(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}>
        <span className={styles.time}>
          <span className={styles.time__minute}>{`${minute}`.padStart(2, '0')}</span>:
          <span className={styles.time__second}>{`${second}`.padStart(2, '0')}</span>
        </span>
        <a className={styles['btn-start']} onClick={toggleTimer}>
          {animating ? 'Stop' : 'Start'}
        </a>
        <a className={styles['btn-setting']} onClick={showModal}>
          <GearIcon className={styles['btn-setting__icon']} />
          {/* <img  src="assets/icons/gear.svg" /> */}
        </a>
      </div>
      <svg className={styles['ring-svg']} height="520" width="520">
        <circle
          style={{ '--duration': `${duration}s`, '--ring-color': ringColor } as CSSProperties}
          className={`${styles.ring} ${animating ? styles.animate : ''}`}
          cx="260"
          cy="260"
          r="255"
        ></circle>
      </svg>

      <DropSVG className={styles['drop-svg']} />

      <Modal title="Settings" visible={isModalVisible} onOk={handleSubmitSetting} onCancel={hideModal}>
        <Form
          name="settings"
          autoComplete="off"
          ref={formRef}
        >
          <Form.Item
            label="Minutes"
            name="minutes"
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Seconds"
            name="seconds"
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Day1;