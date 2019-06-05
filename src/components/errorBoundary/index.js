import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            errorStatus: false
        };
    }

    static getDerivedStateFromError() { // throw new Error抛出会立马捕捉到，并处理
        return {
            errorStatus: true
        };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.info('8111', error, info);
    }

    render() {
        const { errorStatus } = this.state;
        const { children } = this.props;
        console.info('ppp', children);
        if (errorStatus) {
            return <div>error</div>;
        }
        return children;
    }
}
ErrorBoundary.propTypes = {
    children: PropTypes.shape({}).isRequired
};
export default ErrorBoundary;
