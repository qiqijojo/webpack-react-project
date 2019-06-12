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
        console.info('99');
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
