import React from 'react';
import img1 from 'assets/images/aaAa.png';
import styles from './index.less';

const Com1 = () => (
    <div className={styles['com1-wrapper']}>
        <p>com1组件</p>
        <img alt="" src={img1} />
    </div>
);
export default Com1;
