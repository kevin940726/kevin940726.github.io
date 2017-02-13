import React, { PropTypes } from 'react';
import dateFns from 'date-fns';

import LatestPosts from '../../components/LatestPosts';
import Page from '../Page';

import styles from './index.css';

const Post = props => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null;
  const pageTitle = props.head.title;

  return (
    <Page
      {...props}
      header={
        <div>
          <header className={styles.header}>
            <h1>{pageTitle}</h1>
            {
              pageDate &&
              <time className={styles.date} key={pageDate.toISOString()}>
                { dateFns.format(pageDate, 'YYYY/MM/DD') }
              </time>
            }
          </header>
        </div>
      }
      >
      <hr/>
      <LatestPosts/>
    </Page>
  );
};

Post.propTypes = {
  head: PropTypes.object.isRequired
};

export default Post;
