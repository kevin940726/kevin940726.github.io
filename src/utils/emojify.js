import React, { PropTypes } from 'react';
import { lib } from 'emojilib';

const charCodeUTF32 = str => (
  ((str.charCodeAt(0) - 0xD800) * 0x400) +
  (str.charCodeAt(1) - 0xDC00) +
  0x10000
);

const Emoji = ({ text, ...props }) => {
  const code = charCodeUTF32(lib[text].char).toString(16);

  return (
    <img
      src={`http://emojistatic.github.io/images/16/${code}.png`}
      alt={text}
      {...props}
      />
  );
};

Emoji.propTypes = {
  text: PropTypes.string
};

export default Emoji;
