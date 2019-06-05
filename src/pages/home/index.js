import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            crashStatus: false
        };
    }

    handleClick = () => {
        this.setState({
            crashStatus: true
        }, () => {
            const { crashStatus } = this.state;
            if (crashStatus) {
                throw new Error('I crashed!');
            }
        });
    }

    render() {
        return (
            <div>
                这是首页
                <Button type="primary" onClick={this.handleClick}>按钮</Button>
            </div>
        );
    }
}
export default Home;
