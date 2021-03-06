import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import warning from 'warning';
import { BodyContainer, joinUri, Link } from 'phenomic';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ProgressiveImage from '../../components/ProgressiveImage';

import cover from '../../assets/photos/IMG_0585.jpg';
import coverResponsive from '!responsive?sizes[]=50w!../../assets/photos/IMG_0585.jpg';

import styles from './index.css';

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children
  },
  {
    metadata: { pkg, avatar }
  }
) => {
  warning(
    typeof head.title === 'string',
    `Your page '${__filename}' needs a title`
  );

  const metaTitle = `${head.metaTitle ? head.metaTitle : head.title} - ${pkg.title}`;

  let socialImage = avatar;
  if (head.hero) {
    socialImage = head.hero.match('://') ? head.hero :
      joinUri(process.env.PHENOMIC_USER_URL, head.hero);
  }

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url)
    },
    { property: 'og:image', content: socialImage },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${pkg.twitter}` },
    { name: 'twitter:description', content: head.description },
    { name: 'twitter:image', content: socialImage },
    { name: 'description', content: head.description }
  ];

  return (
    <div className={styles.page}>
      <Helmet
        title={metaTitle}
        meta={meta}
        />
      {
        <ProgressiveImage
          src={head.hero || cover}
          responsive={head.hero ? undefined : coverResponsive}
          isParallax
          isBlur
          isCover
          >
          <div className={styles.header}>
            <div className={styles.wrapper}>
              <h1 className={styles.heading}>{ head.title }</h1>
              {
                head.cta &&
                <Link to={head.cta.link}>
                  <Button className={styles.cta} light {...head.cta.props}>
                    { head.cta.label }
                  </Button>
                </Link>
              }
            </div>
          </div>
        </ProgressiveImage>
      }
      <div className={styles.wrapper + ' ' + styles.pageContent}>
        { header }
        <div className={styles.body}>
          {head.hero !== undefined && (
            <ProgressiveImage
              src={head.hero}
              className={styles.heroImg}
              />
          )}
          {
            isLoading ?
              <Loading/> :
              <BodyContainer>{ body }</BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired
};

export default Page;
