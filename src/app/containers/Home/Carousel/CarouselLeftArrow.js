import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarouselLeftArrow extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { onClick } = this.props;
    return (
      <a
        href="true"
        className="carousel__arrow carousel__arrow--left"
        onClick={onClick}
      >
        <span className="fa fa-2x fa-angle-left arrow-size" />
      </a>
    );
  }
}
CarouselLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default CarouselLeftArrow;
