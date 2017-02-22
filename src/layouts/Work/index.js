import React from 'react';
import Svg from 'react-svg-inline';

import metadata from '../../metadata';

import WorkPreview from '../../components/WorkPreview';
import Emoji from '../../components/Emoji';

import gitHubSvg from '../../assets/icons/iconmonstr-github-1.svg';
import BeanfunLoginImg from '../../assets/BeanfunLogin.jpg';
import BeanfunLoginResponsive from '!responsive?sizes[]=50w!../../assets/BeanfunLogin.jpg';
import minesweeperImg from '../../assets/work/minesweeper.png';
import minesweeperResponsive from '!responsive?sizes[]=50w!../../assets/work/minesweeper.png';
import nyanProgressImg from '../../assets/work/nyan-progress.gif';
import mitravelImg from '../../assets/work/mitravel.png';
import whostoneImg from '../../assets/work/whostone.png';
import whostoneResponsive from '!responsive?sizes[]=50w!../../assets/work/whostone.png';
import abcMartImg from '../../assets/work/abc-mart.png';
import give543Img from '../../assets/work/give543.png';

import styles from './index.css';

const Work = () => (
  <ul className={styles.work}>
    <h3 className={styles.subtitle}>I <Emoji text="heart"/> Open Source</h3>
    <WorkPreview
      title="BeanfunLogin"
      img={BeanfunLoginImg}
      responsive={BeanfunLoginResponsive}
      repo="https://github.com/kevin940726/BeanfunLogin"
      url="https://kevin940726.github.io/BeanfunLogin"
      description="A login application written in C\#.NET for solving a specific problem of an online game by analizing the network packages. About 3000 users a day, 92% returning users, over 22000 total users."
      skills={['C#', '.NET', 'network analysis']}
      />

    <WorkPreview
      title="minesweeper"
      img={minesweeperImg}
      responsive={minesweeperResponsive}
      repo="https://github.com/kevin940726/minesweeper"
      url="https://kevin940726.github.io/minesweeper"
      description="A minesweeper game on the web with flexible and extendable API and lots of unique features such as generating non-guessing game and quick mode switch."
      skills={['React', 'Redux', 'Radium', 'Immutable.js', 'Webpack', 'algorithm']}
      />

    <WorkPreview
      title="nyan-progress"
      img={nyanProgressImg}
      repo="https://github.com/kevin940726/nyan-progress"
      url="https://npmjs.com/package/nyan-progress"
      npm="https://npmjs.com/package/nyan-progress"
      description="A Node.js progress loader with Nyan Cat nyaning just for fun. 0 dependency for practicing the native Node.js stream API."
      skills={['Node.js', 'stream']}
      />

    <WorkPreview
      title="svg-css-modules-loader"
      repo="https://github.com/kevin940726/svg-css-modules-loader"
      url="https://npmjs.com/package/svg-css-modules-loader"
      npm="https://npmjs.com/package/svg-css-modules-loader"
      description="A webpack loader to apply css-modules to svg files. A helper loader to solve a problem we encountered during the development of give543."
      skills={['Node.js', 'Webpack Loader', 'CSS Modules', 'SVG', 'AVA']}
      />
    <span className={styles.note}>
      {'...and many more, follow me on '}
      <a className={styles.icon} href={metadata.github} target="_blank" rel="noopener noreferrer">
        <Svg svg={gitHubSvg} cleanup/> Github
      </a>.
    </span>

    <h3 className={styles.subtitle}>I <Emoji text="heart"/> working with others</h3>
    <WorkPreview
      title="give543"
      img={give543Img}
      url="http://www.give543.com"
      description="Built the React-based architecture from the ground up. Introduced new technologies to our team to increase the productivity while keeping it maintainable and scalable. Had to left the project to fulfill the military service."
      skills={['React', 'Redux', 'React Router', 'React Storybook', 'Webpack', 'PostCSS']}
      />

    <WorkPreview
      title="mitravel"
      img={mitravelImg}
      url="http://www.mitravel.com.tw"
      description="Responsible for front-end developing."
      skills={['jQuery', 'SCSS', 'Gulp']}
      />

    <WorkPreview
      title="whostone"
      img={whostoneImg}
      responsive={whostoneResponsive}
      url="https://www.whostone.com.tw"
      description="Responsible for front-end developing."
      skills={['jQuery', 'SCSS']}
      />

    <WorkPreview
      title="abc-mart"
      img={abcMartImg}
      url="https://www.abc-mart.com.tw"
      description="Responsible for assisting front-end developing."
      skills={['Angular 1', 'jQuery', 'SCSS']}
      />

    <WorkPreview
      title="The recommender system of flights and passengers in the airline industry"
      description="An industry-university collaboration project in NTU with the lead of professor Hsin-Min Lu. A recommender system based on historical data."
      skills={['R', 'PostgreSQL', 'Python', 'IR']}
      />
  </ul>
);

export default Work;
