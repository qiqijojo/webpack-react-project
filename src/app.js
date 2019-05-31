import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Button } from 'antd';
import Com1 from 'components/com1/index';
import '@/app.less';

const historyInstance = createBrowserHistory();
const Home = () => (
    <div>
        <span>33333333</span>
        <Button type="primary">按钮</Button>
    </div>
);
const App = () => (
    <Router history={historyInstance}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/next' component={Com1} />
        </Switch>
    </Router>
);
export default App;
