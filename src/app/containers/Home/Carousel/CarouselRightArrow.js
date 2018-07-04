import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import $ from 'jquery';

class CarouselRightArrow extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { onClick } = this.props;
    return (
      <a
        href="true"
        className="carousel__arrow carousel__arrow--right"
        onClick={onClick}
      >
        <span className="fa fa-2x fa-angle-right arrow-size" />
      </a>
    );
  }
}
CarouselRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default CarouselRightArrow;
