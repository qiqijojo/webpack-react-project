// import React from 'react';
// import ReactDom from 'react-dom';

// class Demo extends React.Component {
//     render() {
//         return (
//             <div>hello react</div>
//         );
//     }
// }
// ReactDOM.render(
//     <Demo />,
//     document.getElementById('root')
// );
let path = require("path");
function consoleLog() {
    console.info("4444", path.resolve(__dirname, "../dist"));
}
consoleLog();
