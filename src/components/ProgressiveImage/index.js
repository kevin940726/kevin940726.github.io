import React, { Component, PropTypes } from 'react';

class ProgressiveImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    responsive: PropTypes.object,
    sizes: PropTypes.string
  };

  state = {
    isLoaded: false
  };

  handleLoad = () => {
    this.setState({
      isLoaded: true
    });
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
          />
        {props.children}
      </div>
    );
  }
}

export default ProgressiveImage;
