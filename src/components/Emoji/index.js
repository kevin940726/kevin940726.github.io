import React, { PropTypes } from 'react';
import emojiUnicode from 'emoji-unicode';
import toEmoji from 'emoji-name-map';
import classNames from 'classnames';

import styles from './index.css';

const Emoji = ({ text, ...props }) => {
  const code = emojiUnicode(toEmoji.get(text));

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
