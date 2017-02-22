import React from 'react';
import Helmet from 'react-helmet';

import ProgressiveImage from '../../components/ProgressiveImage';
import LatestPosts from '../../components/LatestPosts';
import Emoji from '../../components/Emoji';
import Tag from '../../components/Tag';
import Experience from '../../components/Experience';
import IconLink from '../../components/IconLink';
import Skills from '../../components/Skills';
import ColoredH2 from '../../components/ColoredH2';

import Work from '../Work';

import cover from '../../assets/photos/IMG_0585.jpg';
import coverResponsive from '!responsive?sizes[]=50w!../../assets/photos/IMG_0585.jpg';
import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconCodePen from '../../assets/icons/codepen.svg';
import iconStackOverflow from '../../assets/icons/stackoverflow.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';

import metadata from '../../metadata';

import styles from './index.css';

const { pkg, avatar } = metadata;

const meta = [
  { property: 'og:type', content: 'profile' },
  { property: 'og:title', content: pkg.title },
  {
    property: 'og:url',
    content: pkg.homepage
  },
  { property: 'og:image', content: avatar },
  { property: 'og:description', content: pkg.description },
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:title', content: pkg.title },
  { name: 'twitter:creator', content: `@${pkg.twitter}` },
  { name: 'twitter:description', content: pkg.description },
  { name: 'twitter:image', content: avatar },
  { name: 'description', content: pkg.description }
];

const Homepage = () => (
  <div>
    <Helmet
      title={pkg.title}
      meta={meta}
      />

    <ProgressiveImage
      src={cover}
      responsive={coverResponsive}
      isParallax
      isBlur
      isCover
      >
      <p className={styles.coverTitle}>
        <img className={styles.avatar} src={avatar} alt="Kai Hao"/>
        {'I am a '}
        <span className={styles.pre}>{'<Front-End Web Developer/>'}</span>
        <span className={styles.buttonGroup}>
          <IconLink href="https://github.com/kevin940726" icon={iconGithub}>Github</IconLink>
          <IconLink href="https://codepen.io/kevin940726" icon={iconCodePen}>CodePen</IconLink>
          <IconLink href="https://stackoverflow.com/users/4699228/kai-hao" icon={iconStackOverflow}>Stack Overflow</IconLink>
          <IconLink href="https://fb.me/kevin940726" icon={iconFacebook}>Facebook</IconLink>
          <IconLink href="https://www.linkedin.com/in/kai-hao" icon={iconLinkedin}>Linkedin</IconLink>
        </span>
      </p>
    </ProgressiveImage>

    <div className={styles.container}>
      <section>
        <ColoredH2>About</ColoredH2>
        <p>
          {'Hi'}
          <Emoji text="wave"/>
          {', I am Kai Hao, a front-end web developer in Taiwan.'}
          <Emoji text="smile"/>
        </p>

        <p>
          {`I love JavsScript and like to learn from the open source community. Huge React (or it's concept`}
          <Emoji text="smirk"/>
          {`) lover, but also willing to get out of comfort zone whenever needed`}
          <Emoji text="muscle"/>
          {'.'}
        </p>

        <p>
          {`Focus on improving web front-end skills while maintainability, scalability, testability, and accessibility are my primary concerns. Interested in using new technologies`}
          <Emoji text="sparkles"/>
          {` and open source libraries to stay relevant. Focus on details`}
          <Emoji text="mag"/>
          {`, have great sense about UI/UX. My long-term goal is to be a part of a world-class`}
          <Emoji text="earth_asia"/>
          {` project.`}
        </p>

        <p>
          <a className={styles.blockquote} href="https://www.youtube.com/watch?v=GDpmVUEjagg" target="_blank" rel="noopener noreferrer">
            {'“Work it harder, make it better, do it faster, make us stronger.” - Daft Punk'}
          </a>
        </p>
      </section>

      <section>
        <ColoredH2>Interests</ColoredH2>
        <Tag text="javascript nerd" emoji="computer"/>{', '}
        <Tag text="cat-person" emoji="cat2"/>{', '}
        <Tag text="jogging-lover" emoji="runner"/>{', '}
        <Tag text="EDM-addicted" emoji="headphones"/>{', '}
        <Tag text="moviegoer" emoji="clapper"/>{', '}
        <Tag text="popping dancer" emoji="dancer"/>{', '}
        <Tag text="twitch gamer" emoji="video_game"/>{', '}
        <Tag text="off-key singer" emoji="microphone"/>{'...'}
      </section>

      <section>
        <ColoredH2>Education</ColoredH2>
        <Experience date="2012/09 - 2016/06">
          National Taiwan University - Information Management
        </Experience>
      </section>

      <section>
        <ColoredH2>Experience</ColoredH2>
        <Experience
          subtitle="Mainly responsible for front-end developing."
          date="2015/07 - 2016/08"
          >
          {'Full-stack web developer intern in '}
          <a href="http://www.25sprout.com" target="_blank" rel="noreferrer noopener">25sprout</a>
        </Experience>
      </section>

      <section>
        <ColoredH2>Skills</ColoredH2>
        <Skills
          skills={[
            {
              title: 'Programming',
              items: ['JavaScript/Node.js', 'HTML5', 'CSS3', 'Python', 'PHP', 'C#', 'R', 'C++', 'Arduino', 'LaTeX']
            },
            {
              title: 'Web',
              items: ['React', 'React Router', 'Redux', 'jQuery', 'RxJS', 'Immutable.js', 'Lodash', 'Electron', 'Express', 'Firebase', 'Socket.io', 'D3.js', 'Polymer']
            },
            {
              title: 'Tools',
              items: ['Babel/ES6+', 'React Storybook', 'AVA', 'Mocha', 'PostCSS', 'SASS', 'Webpack', 'Gulp', 'ESlint', 'Stylelint']
            },
            {
              title: 'Environment',
              items: ['macOS', 'iTerm2 (oh my zsh)', 'Nuclide', 'Git', 'Yarn', 'Slack']
            },
            {
              title: 'Languages',
              items: ['Mandarin', 'English']
            }
          ]}
          />
      </section>

      <section>
        <ColoredH2>Work</ColoredH2>
        <Work/>
      </section>

      <LatestPosts/>
    </div>
  </div>
);

export default Homepage;
