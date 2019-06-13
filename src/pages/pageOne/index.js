import React, { Component } from 'react';
import { Button } from 'antd';
import request from 'utils/request';

class PageOne extends Component {
    constructor() {
        super();
        this.state = {
            text: '默认值'
        };
    }

    handleClick = async () => {
        const obj = { pageType: 'one' };
        const params = {
            body: JSON.stringify(obj),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        };
        const result = await request('/api/test/pageOne', params);
        console.info('666', result);
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>请求数据</Button>
                <span>{text}</span>
            </div>
        );
    }
}
export default PageOne;
