import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Emoji from '../../components/Emoji';

import styles from './index.css';

const About = () => (
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
        {'“Work it harder, make it better, do it faster, makes us stronger.” - Daft Punk'}
      </a>
    </p>
  </section>
);

export default About;
