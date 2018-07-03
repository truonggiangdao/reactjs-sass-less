
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarouselSlide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { index, activeIndex, slide } = this.props;
    console.log(slide);
    return (
      <div
        className={
          index === activeIndex
            ? 'carousel__slide carousel__slide--active'
            : 'carousel__slide'
        }
      >
        <img src={slide.src} alt={slide.alt} className="image-fix" />
        <p className="carousel-slide__content">{slide.content}</p>
      </div>
    );
  }
}
CarouselSlide.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  slide: PropTypes.instanceOf(Object).isRequired,
};
export default CarouselSlide;
