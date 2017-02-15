import React from 'react';

import styles from './index.css';

const Footer = () => (
  <footer className={styles.footer}>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p className={styles.phenomicReference}>
      <span>
        { 'Powered by ' }
        <a
          href={process.env.PHENOMIC_HOMEPAGE}
          target="_blank"
          rel="noopener noreferrer"
          >
          <span className={styles.phenomicReferenceName}>
            { `<${process.env.PHENOMIC_NAME} />` }
          </span>
        </a>
      </span>
      <span className="hideIfMobile">{' / '}</span>
      <span>{'© 2017 Kai Hao, unless otherwise noted.'}</span>
    </p>
  </footer>
);

export default Footer;
