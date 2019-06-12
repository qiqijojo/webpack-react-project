import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Com1 } from 'components/index';

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

    handleJump = () => {
        const { history } = this.props;
        history.push('/pageOne');
    }

    render() {
        return (
            <div>
                <h3>这是首页</h3>
                <Button type="primary" onClick={this.handleClick}>按钮</Button>
                <Button type="primary" onClick={this.handleJump}>跳转到pageOne页面</Button>
                <Com1 />
            </div>
        );
    }
}
Home.propTypes = {
    history: PropTypes.shape({}).isRequired
};
export default Home;
