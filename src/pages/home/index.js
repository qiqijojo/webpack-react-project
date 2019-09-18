import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import { Com1 } from 'components/index';
import styles from './index.less';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            crashStatus: false
        };
    }

    // 测试error boundary
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

    // 页面跳转
    handleJump = () => {
        const { history } = this.props;
        history.push('/pageOne');
    }

    render() {
        return (
            <div className={styles['home-wrapper']}>
                <Row>
                    <Col span={3}>
                        <h1>这是首页</h1>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.handleClick}>测试error boundary</Button>
                    </Col>
                    <Col span={6}>
                        <Com1 />
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.handleJump}>跳转到pageOne页面</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
Home.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
};
export default Home;
