import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'dva';
import styles from './IndexPage.less';
// import imsge from '@/assets/yay.jpg';
// console.log(imsge)

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <Button type="primary">Start</Button>
      <img src={require('@/assets/yay.jpg')}/>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

export default connect()(IndexPage);
