import React, { Component } from 'react';
import { Button } from 'antd';

class PageOne extends Component {
    constructor() {
        super();
        this.state = {
            text: '默认值'
        };
    }

    handleClick = () => {
        const obj = { pageType: 'one' };
        const params = {
            body: JSON.stringify(obj),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        };
        fetch('/api/test/pageOne', params) // 返回的是一个promise对象，因此后面要用.then接收
            .then(response => response.json()) // 返回的是一个promise对象，因此后面要用.then接收
            .then((myJson) => {
                console.info(myJson);
            });
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
