import React from 'react';

import ProgressiveImage from '../../components/ProgressiveImage';
import LatestPosts from '../../components/LatestPosts';
import Emoji from '../../components/Emoji';
import Tag from '../../components/Tag';
import Experience from '../../components/Experience';

import cover from '../../assets/cover.jpg';
import coverResponsive from '!responsive?sizes[]=50w!../../assets/cover.jpg';

import styles from './index.css';

const Homepage = () => (
  <div>
    <ProgressiveImage
      className={styles.cover}
      src={cover}
      responsive={coverResponsive}
      isParallax
      >
      <p className={styles.coverTitle}>
        {'<Front-End Developer/>'}
      </p>
    </ProgressiveImage>
    <div className={styles.container}>
      <p>
        {'Hi, I am Kai Hao, a front-end developer in Taiwan.'}
        <Emoji text="smile"/>
      </p>
      <p>
        <Tag text="javascript nerd" emoji="computer"/> {', '}
        <Tag text="cat-person" emoji="cat2"/> {', '}
        <Tag text="jogging-lover" emoji="runner"/> {', '}
        <Tag text="EDM-addicted" emoji="headphones"/> {', '}
        <Tag text="moviegoer" emoji="clapper"/> {', '}
        <Tag text="popping dancer" emoji="dancer"/> {', '}
        <Tag text="twitch gamer" emoji="video_game"/> {', '}
        <Tag text="off-key singer" emoji="microphone"/> {'...'}
      </p>

      {/* <Code>
        {outdent`
          .tools {
            OS: macOS;
            vcs: git;
            editor: Nuclide;
            terminal: iTerm2(zsh);
            communication: Slack;
            build: webpack, gulp;
            package-manager: yarn, npm;
          }
        `}
      </Code> */}

      <div>
        <h2>Education</h2>
        <Experience date="2012/09 - 2016/06">
          National Taiwan University - Information Management
        </Experience>
      </div>

      <div>
        <h2>Experience</h2>
        <Experience
          subtitle="Mainly responsible for front-end developing."
          date="2015/07 - 2016/07"
          >
          {'Full-stack web developer intern in '}
          <a href="http://www.25sprout.com" target="_blank" rel="noreferrer noopener">25sprout</a>
        </Experience>
      </div>
    </div>

    <LatestPosts/>
  </div>
);

export default Homepage;
