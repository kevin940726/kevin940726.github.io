import React, { PropTypes } from 'react';
import { Link } from 'phenomic';
import Svg from 'react-svg-inline';

import gitHubSvg from '../icons/iconmonstr-github-1.svg';

import styles from './index.css';

const Header = (props, { metadata: { pkg, github } }) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.navPart1}>
        <Link
          className={styles.home}
          to={'/'}
          >
          { pkg.title }
        </Link>
      </div>
      <div className={styles.navPart2}>
        <Link className={styles.link} to={'/blog'}>Blog</Link>
        {
          github &&
          <a
            href={github}
            className={styles.link}
            >
            <Svg svg={gitHubSvg} cleanup/>
            <span className="hideIfMobile">{ 'GitHub' }</span>
          </a>
        }
      </div>
    </nav>
  </header>
);

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
};

export default Header;
