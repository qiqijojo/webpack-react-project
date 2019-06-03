import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Loadable from 'react-loadable';
import Com1 from 'components/com1/index';
import '@/app.less';

const historyInstance = createBrowserHistory();
const ErrorLoading = ({ pastDelay }) => {
    if (pastDelay) {
        return <p>loading</p>;
    }
    return null;
};
const Home = Loadable({
    loader: () => import('pages/home/index'),
    loading: ErrorLoading,
    delay: 200
});
const App = () => (
    <Router history={historyInstance}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/next' component={Com1} />
        </Switch>
    </Router>
);
ErrorLoading.propTypes = {
    pastDelay: PropTypes.bool.isRequired
};
export default App;
