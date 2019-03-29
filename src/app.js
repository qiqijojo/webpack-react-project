import React from 'react';
import { DatePicker, Button } from 'antd';
// import Com1 from 'components/com1/index';
import './app.less';

const App = () => (
    <div className="app-wrapper">
        <Button type="primary">测试antd</Button>
        <DatePicker />
        {/* <Com1 /> */}
    </div>
);
export default App;
