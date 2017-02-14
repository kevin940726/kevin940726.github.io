import React, { Component, PropTypes } from 'react';

import styles from './index.css';

class ProgressiveImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    responsive: PropTypes.object,
    isParallax: PropTypes.bool,
    isBlur: PropTypes.bool,
    isCover: PropTypes.bool
  };

  state = {
    isLoaded: false
  };

  imgRef = null;

  componentDidMount() {
    if (this.props.isParallax) {
      window.requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

      window.addEventListener('scroll', this.handleScroll);
    }
  }
  componentWillUnmount() {
    if (this.props.isParallax) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    if (this.imgRef && window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        this.imgRef.style.transform = `translateY(${window.scrollY / 2}px)`;
      });
    }
  }
  handleLoad = () => {
    this.setState({
      isLoaded: true
    });
  }
  handleBind = ref => {
    this.imgRef = ref;

    if (this.imgRef && this.imgRef.complete) {
      this.handleLoad();
    }
    // handling cached image,
    // see http://mikefowler.me/2014/04/22/cached-images-load-event/
  }

  render() {
    const { src, isBlur, isCover, ...props } = this.props;
    const { isLoaded } = this.state;

    const prefix = isBlur ? 'srcBlur' : 'src';

    const responsive = this.props.responsive;

    return (
      <div className={`${props.className || ''} ${isCover ? styles.cover : styles.container}`}>
        {responsive && (
          <img
            src={responsive.src}
            className={styles.placeholder}
            />
        )}
        <img
          src={src}
          className={isLoaded ? styles[`${prefix}Loaded`] : styles[prefix]}
          onLoad={this.handleLoad}
          ref={this.handleBind}
          />
        {props.children}
      </div>
    );
  }
}

export default ProgressiveImage;
