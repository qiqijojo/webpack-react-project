import React from 'react';
import { DatePicker, Button } from 'antd';
import Com1 from 'components/com1/index';
import styles from './app.less';

const App = () => (
    <div className={styles['app-wrapper']}>
        <Button type="primary">测试antd</Button>
        <DatePicker />
        <Com1 />
    </div>
);
export default App;
