import React from 'react';

import ProgressiveImage from '../../components/ProgressiveImage';
import IconLink from '../../components/IconLink';

import cover from '../../assets/photos/IMG_0585.jpg';
import coverResponsive from '!responsive?sizes[]=50w!../../assets/photos/IMG_0585.jpg';
import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconCodePen from '../../assets/icons/codepen.svg';
import iconStackOverflow from '../../assets/icons/stackoverflow.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';

import metadata from '../../metadata';

import styles from './index.css';

const { avatar } = metadata;

const Cover = () => (
  <ProgressiveImage
    src={cover}
    responsive={coverResponsive}
    isParallax
    isBlur
    isCover
    >
    <p className={styles.coverTitle}>
      <img className={styles.avatar} src={avatar} alt="Kai Hao"/>
      {'I am a '}
      <span className={styles.pre}>{'<Front-End Web Developer/>'}</span>
      <span className={styles.buttonGroup}>
        <IconLink href="https://github.com/kevin940726" icon={iconGithub}>Github</IconLink>
        <IconLink href="https://codepen.io/kevin940726" icon={iconCodePen}>CodePen</IconLink>
        <IconLink href="https://stackoverflow.com/users/4699228/kai-hao" icon={iconStackOverflow}>Stack Overflow</IconLink>
        <IconLink href="https://fb.me/kevin940726" icon={iconFacebook}>Facebook</IconLink>
        <IconLink href="https://www.linkedin.com/in/kai-hao" icon={iconLinkedin}>Linkedin</IconLink>
      </span>
    </p>
  </ProgressiveImage>
);

export default Cover;
