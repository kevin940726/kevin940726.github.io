import React from 'react';

import WorkPreview from '../../components/WorkPreview';

import BeanfunLoginImg from '../../assets/BeanfunLogin.jpg';
import BeanfunLoginResponsive from '!responsive?sizes[]=50w!../../assets/BeanfunLogin.jpg';
import minesweeperImg from '../../assets/work/minesweeper.png';
import minesweeperResponsive from '!responsive?sizes[]=50w!../../assets/work/minesweeper.png';
import nyanProgressImg from '../../assets/work/nyan-progress.gif';

import styles from './index.css';

const Work = () => (
  <ul className={styles.work}>
    <WorkPreview
      title="BeanfunLogin"
      img={BeanfunLoginImg}
      responsive={BeanfunLoginResponsive}
      repo="https://github.com/kevin940726/BeanfunLogin"
      url="https://kevin940726.github.io/BeanfunLogin"
      description="A login application written in C#.NET for solving a specific problem of an online game. About 3000 users a day, 92.7% returning users, over 17000 total users until now."
      skills={['C#', '.NET', 'network analysis']}
      />

    <WorkPreview
      title="minesweeper"
      img={minesweeperImg}
      responsive={minesweeperResponsive}
      repo="https://github.com/kevin940726/minesweeper"
      url="https://kevin940726.github.io/minesweeper"
      description="The minesweeper game on the web with flexible and extendable API and lots of unique features."
      skills={['React', 'Redux', 'immutable.js', 'algorithm']}
      />

    <WorkPreview
      title="nyan-progress"
      img={nyanProgressImg}
      repo="https://github.com/kevin940726/nyan-progress"
      url="https://npmjs.com/package/nyan-progress"
      npm="https://npmjs.com/package/nyan-progress"
      description="A Node.js progress loader with Nyan Cat nyaning just for fun. 0 dependency for practicing the native Node.js API."
      skills={['Node.js', 'stream']}
      />
  </ul>
);

export default Work;
