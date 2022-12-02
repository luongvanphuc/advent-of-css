import React, { useRef, ReactElement } from 'react';

import { AudioMethods } from './components/audio';
import Audio from './components/audio';
import styles from './styles.module.scss';

const Day3 = (): ReactElement => {

  const audioRefs = useRef<(AudioMethods | null)[]>([]);

  const play = (idx: number): void => {
    audioRefs.current[idx]?.play();
  };

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.svg}
        width="1850"
        height="622"
        viewBox="0 0 1850 622"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          onClick={(): void => play(1)}
          className={styles.pWhite}
          d="M852.245 57.8785L987.724 39.4677L952.32 600.743H868.948L852.245 57.8785Z"
          fill="white"
        />
        <path
          onClick={(): void => play(2)}
          className={styles.pWhite}
          d="M836.848 589.764L701.369 608.175L736.773 46.8996L820.145 46.8996L836.848 589.764Z"
          fill="white"
        />
        <path
          onClick={(): void => play(3)}
          className={styles.pWhite}
          d="M1257.71 582.332L1122.23 600.743L1157.64 39.4676L1241.01 39.4676L1257.71 582.332Z"
          fill="white"
        />
        <path
          onClick={(): void => play(4)}
          className={styles.pWhite}
          d="M431.379 65.3103L566.859 46.8995L531.455 608.175L448.082 608.175L431.379 65.3103Z"
          fill="white"
        />
        <path
          onClick={(): void => play(5)}
          className={styles.pWhite}
          d="M1689.09 67.0507L1824.57 48.6399L1789.17 609.915H1705.8L1689.09 67.0507Z"
          fill="white"
        />
        <path
          onClick={(): void => play(6)}
          className={styles.pWhite}
          d="M1689.09 591.504L1573.29 609.915L1561.96 48.6399L1660 48.6399L1689.09 591.504Z"
          fill="white"
        />
        <path
          onClick={(): void => play(7)}
          className={styles.pWhite}
          d="M5.78161e-05 56.138L115.805 37.7273L127.136 599.002L29.0897 599.002L5.78161e-05 56.138Z"
          fill="white"
        />
        <path
          onClick={(): void => play(8)}
          className={styles.pWhite}
          d="M1555.82 567.379L1422.64 598.31L1405.69 36.1753L1510.67 36.175L1555.82 567.379Z"
          fill="white"
        />
        <path
          onClick={(): void => play(9)}
          className={styles.pWhite}
          d="M133.271 80.2627L266.451 49.3319L283.4 611.467L178.428 611.467L133.271 80.2627Z"
          fill="white"
        />
        <path
          onClick={(): void => play(10)}
          className={styles.pWhite}
          d="M1404.46 615.635L1286.4 603.633L1295.21 41.3119L1378.49 37.3676L1404.46 615.635Z"
          fill="white"
        />
        <path
          onClick={(): void => play(11)}
          className={styles.pWhite}
          d="M284.634 32.0071L402.692 44.0089L393.881 606.33L310.603 610.275L284.634 32.0071Z"
          fill="white"
        />
        <path
          onClick={(): void => play(12)}
          className={styles.pWhite}
          d="M1003 39.4677L1141.35 39.4677L1085.53 600.743H990.047L1003 39.4677Z"
          fill="white"
        />
        <path
          onClick={(): void => play(13)}
          className={styles.pWhite}
          d="M686.096 608.175L547.741 608.175L603.562 46.8996L699.046 46.8996L686.096 608.175Z"
          fill="white"
        />
        <path
          onClick={(): void => play(14)}
          className={styles.pBlack}
          d="M66.7636 26.1565L161.964 25.0053L170.478 359.026L94.718 359.943L66.7636 26.1565Z"
          fill="black"
        />
        <path
          onClick={(): void => play(15)}
          className={styles.pBlack}
          d="M340.114 14.7584L251.138 17.3831L253.152 351.41L323.958 349.321L340.114 14.7584Z"
          fill="black"
        />
        <path
          onClick={(): void => play(16)}
          className={styles.pBlack}
          d="M889.37 30.6051L800.393 33.2298L802.407 367.257L873.214 365.168L889.37 30.6051Z"
          fill="black"
        />
        <path
          onClick={(): void => play(17)}
          className={styles.pBlack}
          d="M555.328 11.6509L612.809 20.1782L594.352 353.314L548.609 346.529L555.328 11.6509Z"
          fill="black"
        />
        <path
          onClick={(): void => play(18)}
          className={styles.pBlack}
          d="M1101.86 10.4967L1171.04 14.6972L1171.59 348.465L1116.54 345.122L1101.86 10.4967Z"
          fill="black"
        />
        <path
          onClick={(): void => play(19)}
          className={styles.pBlack}
          d="M1308.51 387.717L1228.5 379.326L1247.55 16.3802L1311.21 23.058L1308.51 387.717Z"
          fill="black"
        />
        <path
          onClick={(): void => play(20)}
          className={styles.pBlack}
          d="M1585.99 381.611L1513.18 378.402L1504.49 15.1515L1562.43 17.7048L1585.99 381.611Z"
          fill="black"
        />
        <path
          onClick={(): void => play(21)}
          className={styles.pBlack}
          d="M1716.67 371.33L1644.15 364.075L1655.69 0.903768L1713.4 6.67697L1716.67 371.33Z"
          fill="black"
        />
        <path
          onClick={(): void => play(22)}
          className={styles.pBlack}
          d="M1847.35 385.637L1774.84 378.382L1762.68 37.1812L1844.08 20.9836L1847.35 385.637Z"
          fill="black"
        />
        <path
          onClick={(): void => play(23)}
          className={styles.pBlack}
          d="M665.578 18.0311L743.978 19.9085L750.266 353.732L687.876 352.238L665.578 18.0311Z"
          fill="black"
        />
      </svg>

      <div className="hidden">
        {Array.from(Array(23).keys()).map((i) => (
          <Audio
            ref={(el): AudioMethods | null => audioRefs.current[i] = el}
            key={i}
            file={'key-' + (i + 1) + '.mp3'}
          />
        ))}
      </div>
    </div>
  );
};

export default Day3;
