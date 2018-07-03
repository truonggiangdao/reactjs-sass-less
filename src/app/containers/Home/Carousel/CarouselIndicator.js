import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarouselIndicator extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { index, activeIndex, onClick } = this.props;
    return (
      <li
        className={
          index === activeIndex
            ? 'carousel__indicator active'
            : 'carousel__indicator'
        }
        data-target="#bs-carousel"
        data-slide-to={index}
        onClick={onClick}
        role="none"
      />
    );
  }
}
CarouselIndicator.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};
export default CarouselIndicator;
