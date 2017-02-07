import React, { PropTypes } from 'react';

import Emoji from '../Emoji';
import styles from './index.css';

const Tag = ({ text, emoji }) => (
  <span className={styles.tag}>
    {emoji !== undefined && <Emoji text={emoji}/>}
    {text}
  </span>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Tag;
