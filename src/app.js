import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Com1 from 'components/com1/index';
import '@/app.less';

const historyInstance = createBrowserHistory();
const App = () => (
    <Router history={historyInstance}>
        <Switch>
            <Route exact path='/' component={() => <div>homeeee</div>} />
            <Route path='/next' component={Com1} />
        </Switch>
    </Router>
);
export default App;
