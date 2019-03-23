import React from 'react';
import { DatePicker, Button } from 'antd';
import './app.less';

const App = () => (
    <div className="app-wrapper">
        <Button type="primary">测试antd</Button>
        <DatePicker />
    </div>
);
export default App;
