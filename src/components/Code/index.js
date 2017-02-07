import React, { PropTypes } from 'react';

import styles from './index.css';

const Code = ({ expand, children }) => (
  <pre className={expand ? styles.preExpand : styles.pre}>
    <code className={styles.code}>
      {children}
    </code>
  </pre>
);

Code.propTypes = {
  expand: PropTypes.bool,
  children: PropTypes.node
};

export default Code;
