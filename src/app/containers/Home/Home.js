import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './Home.scss';
// import PropTypes from 'prop-types';
// import $ from 'jquery';
import CarouselIndicator from './Carousel/CarouselIndicator';
import CarouselLeftArrow from './Carousel/CarouselLeftArrow';
import CarouselRightArrow from './Carousel/CarouselRightArrow';
import CarouselSlide from './Carousel/CarouselSlide';

class Home extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
    };

    this.carouselSlidesData = [
      {
        src: 'https://www.holidayguru.nl/wp-content/uploads/2016/09/Norwegen-Fjords-shutterstock_316382687-1.jpg',
        alt: 'First Slide',
      },
      {
        src: 'https://www.jssor.com/demos/img/gallery/980x380/002.jpg',
        alt: 'Second Slide',
      },
      {
        src: 'http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
        alt: 'Thirst Slide',

      },
    ];
  }

  componentDidMount() {
    // $('.carousel').carousel({
    //   interval: 3000,
    // });
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();
    const { activeIndex } = this.state;
    let index = activeIndex;
    const items = this.carouselSlidesData;
    const slidesLength = items.length;

    if (index < 1) {
      index = slidesLength;
    }
    index -= 1;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();
    const { activeIndex } = this.state;
    let index = activeIndex;
    const items = this.carouselSlidesData;
    const slidesLength = items.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    index += 1;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const slides = this.carouselSlidesData;
    const { activeIndex } = this.state;
    return (
      <div className="container">
        <div className="carousel">
          <div className="carousel__inner">
            <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
            <div className="carousel__slides">
              {slides.map((slide, index) => (
                <CarouselSlide
                  key={index.toString()}
                  index={index}
                  activeIndex={activeIndex}
                  slide={slide}
                />
              ))}
            </div>
            <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
            <ol className="carousel__indicators">
              {slides.map((slide, index) => (
                <CarouselIndicator
                  key={index.toString()}
                  index={index}
                  activeIndex={activeIndex}
                  isActive={activeIndex === index}
                  onClick={() => this.goToSlide(index)}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
