import React, { Component, PropTypes } from 'react';

import styles from './index.css';

class ProgressiveImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    responsive: PropTypes.object,
    isParallax: PropTypes.bool,
    isBlur: PropTypes.bool
  };

  state = {
    isLoaded: false
  };

  imgRef = null;

  componentDidMount() {
    if (this.props.isParallax) {
      const requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

      window.addEventListener('scroll', () => {
        if (this.imgRef) {
          requestAnimationFrame(() => {
            this.imgRef.style.transform = `translateY(${window.scrollY / 2}px)`;
          });
        }
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleLoad = () => {
    this.setState({
      isLoaded: true
    });
  }
  handleBind = ref => {
    this.imgRef = ref;
  }

  render() {
    const { src, responsive, isBlur, ...props } = this.props;
    const { isLoaded } = this.state;

    const prefix = isBlur ? 'srcBlur' : 'src';

    return (
      <div className={`${props.className || ''} ${styles.container}`}>
        <img
          src={responsive.src}
          className={styles.placeholder}
          />
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
