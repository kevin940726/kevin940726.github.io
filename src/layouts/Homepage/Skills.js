import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Skills from '../../components/Skills';

const SkillsSection = () => (
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
);

export default SkillsSection;
