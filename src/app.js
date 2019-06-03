import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Com1 from 'components/com1/index';
import '@/app.less';

const historyInstance = createBrowserHistory();
const Home = React.lazy(() => import('pages/home/index'));
const App = () => (
    <Router history={historyInstance}>
        <Suspense fallback={<p>loading</p>}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/next' component={Com1} />
            </Switch>
        </Suspense>
    </Router>
);
export default App;
