import React from 'react';
import img1 from 'assets/images/aaAa.png';
import styles from './index.less';

// const Com1 = () => (
//     <div className={styles['com1-wrapper']}>
//         <span>com1组件</span>
//         <img alt="" src={img1} />
//     </div>
// );
class Com1 extends React.Component {
    constructor() {
        super();
        this.state = {
            aa: []
        };
    }

    render() {
        const { aa } = this.state;
        return (
            <div className={styles['com1-wrapper']}>
                <span>com1组件</span>
                <img alt="" src={img1} />
            </div>
        );
    }
}
export default Com1;
