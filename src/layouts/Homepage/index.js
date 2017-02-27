import React from 'react';
import Helmet from 'react-helmet';

import LatestPosts from '../../components/LatestPosts';

import metadata from '../../metadata';

import Cover from './Cover';
import About from './About';
import Interests from './Interests';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Work from './Work';

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

    <Cover/>

    <div className={styles.container}>
      <About/>

      <Interests/>

      <Education/>

      <Experience/>

      <Skills/>

      <Work/>

      <LatestPosts/>
    </div>
  </div>
);

export default Homepage;
