import React, { Component, PropTypes } from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';

const onScroll$ = Observable.fromEvent(window, 'scroll');

const requestAnimationFrame = window.requestAnimationFrame;

class ProgressiveImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    responsive: PropTypes.object,
    scrollY: PropTypes.number
  };

  state = {
    isLoaded: false
  };

  imgRef = null;

  componentDidMount() {
    onScroll$.subscribe(() => {
      if (this.imgRef) {
        requestAnimationFrame(() => {
          this.imgRef.style.transform = `translateY(${window.scrollY / 2}px)`;
        });
      }
    });
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
    const { src, responsive, ...props } = this.props;
    const { isLoaded } = this.state;

    return (
      <div className={props.className}>
        <img
          src={responsive.src}
          style={{
            filter: 'blur(5px)'
          }}
          />
        <img
          src={src}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease-out'
          }}
          onLoad={this.handleLoad}
          ref={this.handleBind}
          />
        {props.children}
      </div>
    );
  }
}

export default ProgressiveImage;
