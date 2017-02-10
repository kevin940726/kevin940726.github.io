import React, { PropTypes } from 'react';
import Svg from 'react-svg-inline';

import Tag from '../Tag';

import gitHubSvg from '../../assets/icons/iconmonstr-github-1.svg';
import npmSvg from '../../assets/icons/npm.svg';

import styles from './index.css';

const WorkPreview = ({ repo, url, npm, title, description, img, skills }) => (
  <div className={styles.preview}>
    {img !== undefined && (
      <a className={styles.img} href={url} target="_blank" rel="noopener noreferrer">
        <div
          className={styles.placeholder}
          style={{
            backgroundImage: `url(${img})`
          }}
          />
        <img src={img} alt={title}/>
      </a>
    )}
    <div className={styles.content}>
      <a className={styles.title} href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.footer}>
        <ul className={styles.skills}>
          {skills.map((skill, i) => (
            <Tag key={i} text={skill}/>
          ))}
        </ul>
        <ul className={styles.icons}>
          {npm !== undefined && (
            <a className={styles.icon} href={npm} target="_blank" rel="noopener noreferrer">
              <Svg svg={npmSvg}/>
            </a>
          )}
          {repo !== undefined && (
            <a className={styles.icon} href={repo} target="_blank" rel="noopener noreferrer">
              <Svg svg={gitHubSvg} cleanup/>
            </a>
          )}
        </ul>
      </div>
    </div>
  </div>
);

WorkPreview.propTypes = {
  repo: PropTypes.string,
  url: PropTypes.string,
  npm: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  skills: PropTypes.array
};

export default WorkPreview;
