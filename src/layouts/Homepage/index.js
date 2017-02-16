import React from 'react';
import Helmet from 'react-helmet';
import { joinUri } from 'phenomic';

import ProgressiveImage from '../../components/ProgressiveImage';
import LatestPosts from '../../components/LatestPosts';
import Emoji from '../../components/Emoji';
import Tag from '../../components/Tag';
import Experience from '../../components/Experience';
import IconLink from '../../components/IconLink';

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

const { pkg } = metadata;

const avatar = 'https://avatars3.githubusercontent.com/u/7753001';

const meta = [
  { property: 'og:type', content: 'profile' },
  { property: 'og:title', content: pkg.title },
  {
    property: 'og:url',
    content: pkg.homepage
  },
  { property: 'og:image', content: joinUri(process.env.PHENOMIC_USER_URL, cover) },
  { property: 'og:description', content: pkg.description },
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:title', content: pkg.title },
  { name: 'twitter:creator', content: `@${pkg.twitter}` },
  { name: 'twitter:description', content: pkg.description },
  { name: 'twitter:image', content: cover },
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
        <span>{'<Front-End Developer/>'}</span>
      </p>
    </ProgressiveImage>

    <div className={styles.container}>
      <h2>About</h2>
      <p>
        {'Hi, I am Kai Hao, a front-end developer in Taiwan'}
        <Emoji text="smile"/>
        {'.'}
      </p>

      <p>
        {'I create amazing website which is highly scalable and maintainable. Use cutting-edge technology and open source libraries to stay relevant. Focus on details, have great sense about UI/UX.'}
      </p>

      <p>
        {`React (or it's concept) lover, write clean and maintainable code, willing to take challenge, dream about working on a project that have many users world wide.`}
      </p>

      <p>
        <a className={styles.blockquote} href="https://www.youtube.com/watch?v=GDpmVUEjagg" target="_blank" rel="noopener noreferrer">
          {'“Work it harder, make it better, do it faster, make us stronger.” - Daft Punk'}
        </a>
      </p>

      <p>
        {'Facts about me:'}<br/>
        <Tag text="javascript nerd" emoji="computer"/>{', '}
        <Tag text="cat-person" emoji="cat2"/>{', '}
        <Tag text="jogging-lover" emoji="runner"/>{', '}
        <Tag text="EDM-addicted" emoji="headphones"/>{', '}
        <Tag text="moviegoer" emoji="clapper"/>{', '}
        <Tag text="popping dancer" emoji="dancer"/>{', '}
        <Tag text="twitch gamer" emoji="video_game"/>{', '}
        <Tag text="off-key singer" emoji="microphone"/>{'...'}
      </p>

      <p>
        {'Tools/Libraries I use (for now):'}<br/>
        <Tag text="nuclide"/>{', '}
        <Tag text="git"/>{', '}
        <Tag text="macOS"/>{', '}
        <Tag text="iterm2 (oh my zsh)"/>{', '}
        <Tag text="slack"/>{', '}
        <Tag text="webpack"/>{', '}
        <Tag text="yarn"/>{', '}
        <Tag text="react"/>{', '}
        <Tag text="redux"/>{', '}
        <Tag text="babel"/>{', '}
        <Tag text="postcss"/>{', '}
        <Tag text="eslint"/>{', '}
        <Tag text="stylelint"/>{', '}
        <Tag text="flow"/>{', '}
        <Tag text="ava"/>{'...'}
      </p>

      <p>
        {'Played with:'}<br/>
        <Tag text="javascript/node"/>{', '}
        <Tag text="html5"/>{', '}
        <Tag text="css3"/>{', '}
        <Tag text="python"/>{', '}
        <Tag text="php"/>{', '}
        <Tag text="C#"/>{', '}
        <Tag text="R"/>{', '}
        <Tag text="C++"/>{', '}
        <Tag text="arduino"/>{', '}
        <Tag text="LaTeX"/>{'...'}
      </p>

      <p>
        {'Find me at:'}<br/>
        <IconLink href="https://github.com/kevin940726" icon={iconGithub}>Github</IconLink>{' , '}
        <IconLink href="https://codepen.io/kevin940726" icon={iconCodePen}>CodePen</IconLink>{' , '}
        <IconLink href="https://stackoverflow.com/users/4699228/kai-hao" icon={iconStackOverflow}>Stack Overflow</IconLink>{' , '}
        <IconLink href="https://fb.me/kevin940726" icon={iconFacebook}>Facebook</IconLink>{' , '}
        <IconLink href="https://www.linkedin.com/in/kai-hao" icon={iconLinkedin}>Linkedin</IconLink>
      </p>

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
          date="2015/07 - 2016/08"
          >
          {'Full-stack web developer intern in '}
          <a href="http://www.25sprout.com" target="_blank" rel="noreferrer noopener">25sprout</a>
        </Experience>
      </div>

      <div>
        <h2>Work</h2>
        <Work/>
      </div>

      <LatestPosts/>
    </div>
  </div>
);

export default Homepage;
