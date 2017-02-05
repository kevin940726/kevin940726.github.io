import React from 'react';

import LatestPosts from '../../components/LatestPosts';
import Emoji from '../../utils/emojify';

import styles from './index.css';

const Homepage = () => (
  <div>
    <div className={styles.container}>
      <p>
        Hi, I am Kai Hao, a front-end developer in Taiwan.
        <Emoji text="smile"/>
      </p>
      <p>
        JavaScript-addicted,
      </p>
    </div>

    <LatestPosts/>
  </div>
);

export default Homepage;
