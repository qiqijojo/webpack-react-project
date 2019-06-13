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
        const { data } = await request.post('/api/test/pageOne', obj);
        await this.setState({
            text: data.textValue
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
