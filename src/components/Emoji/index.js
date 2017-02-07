import React, { PropTypes } from 'react';
import { lib } from 'emojilib';
import classNames from 'classnames';

import styles from './index.css';

const charCodeUTF32 = str => (
  ((str.charCodeAt(0) - 0xD800) * 0x400) +
  (str.charCodeAt(1) - 0xDC00) +
  0x10000
);

const Emoji = ({ text, ...props }) => {
  const code = charCodeUTF32(lib[text].char).toString(16);

  return (
    <span {...props} className={classNames(props.className, styles.emoji)}>
      <img
        src={`http://emojistatic.github.io/images/32/${code}.png`}
        alt={text}
        />
    </span>
  );
};

Emoji.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Emoji;
