import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Tag from '../../components/Tag';

const Interests = () => (
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
);

export default Interests;
