import React from 'react';
import ReactDom from 'react-dom';

class Demo extends React.Component {
    render() {
        return (
            <div>hello react</div>
        );
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);