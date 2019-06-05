import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ErrorBoundary, Loading } from 'components/index';
import '@/app.less';

const historyInstance = createBrowserHistory();
const Home = React.lazy(() => import('pages/home/index'));
const App = () => (
    <Router history={historyInstance}>
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Suspense>
        </ErrorBoundary>
    </Router>
);
export default App;
