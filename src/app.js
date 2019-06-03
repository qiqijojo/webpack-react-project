import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Loadable from 'react-loadable';
// import { Button, Spinner } from 'antd';
import Com1 from 'components/com1/index';
import Home from 'pages/home/index';
import '@/app.less';

const historyInstance = createBrowserHistory();
// const Home = () => (
//     <div>
//         <span>33333333</span>
//         <Button type="primary">按钮</Button>
//     </div>
// );
// const ErrorLoading = ({ pastDelay }) => {
//     console.info('999', pastDelay);
//     if (pastDelay) {
//         return <Spinner />;
//     }
//     return null;
// };
// const Home = Loadable({
//     loader: () => import('pages/home/index'),
//     loading: ErrorLoading,
//     delay: 200
// });
const App = () => (
    <Router history={historyInstance}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/next' component={Com1} />
        </Switch>
    </Router>
);
// ErrorLoading.propTypes = {
//     pastDelay: propTypes.
// };
export default App;
