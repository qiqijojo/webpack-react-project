import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ErrorBoundary, Loading } from 'components/index';
import '@/app.less';
import routes from 'router/index';

const historyInstance = createBrowserHistory();
const App = () => (
    <Router history={historyInstance}>
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <Switch>
                    {
                        routes.map(item => (
                            <Route exact key={item.path} path={item.path} component={item.component} />
                        ))
                    }
                </Switch>
            </Suspense>
        </ErrorBoundary>
    </Router>
);
export default App;
