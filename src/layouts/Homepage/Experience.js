import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Experience from '../../components/Experience';

const Experiences = () => (
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
);

export default Experiences;
