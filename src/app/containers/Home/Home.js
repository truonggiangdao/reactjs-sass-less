import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './Home.scss';
// import PropTypes from 'prop-types';
import $ from 'jquery';
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


  goToNextSlide = (e) => {
    e.preventDefault();
    $(() => {
      const next = $('.carousel__slide--active').next();
      if (next.length === 0) {
        $('.carousel__slide--active').addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', () => {
          $('.bien-mat-o-ben-trai').removeClass('bien-mat-o-ben-trai');
        });
        $('.carousel__slides .carousel__slide:nth-child(1)').addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', () => {
          // remove .active
          $('.carousel__slide--active').removeClass('carousel__slide--active');
          $('.di-vao-tu-ben-phai').addClass('carousel__slide--active').removeClass('di-vao-tu-ben-phai');
        });
      } else {
        $('.carousel__slide--active').addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', () => {
          $('.bien-mat-o-ben-trai').removeClass('bien-mat-o-ben-trai');
        });
        next.addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', () => {
        // remove .active
          $('.carousel__slide--active').removeClass('carousel__slide--active');
          $('.di-vao-tu-ben-phai').addClass('carousel__slide--active').removeClass('di-vao-tu-ben-phai');
        });
      }
    });
    // const { activeIndex } = this.state;
    // let index = activeIndex;
    // const items = this.carouselSlidesData;
    // const slidesLength = items.length - 1;

    // if (index === slidesLength) {
    //   index = -1;
    // }

    // index += 1;

    // this.setState({
    //   activeIndex: index,
    // });
  }

  goToPrevSlide = (e) => {
    e.preventDefault();
    $(() => {
      const pre = $('.carousel__slide--active').prev();
      if (pre.length === 1) {
        $('.carousel__slide--active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', () => {
          $('.bien-mat-o-ben-phai').removeClass('bien-mat-o-ben-phai');
        });

        $('.carousel__slides .carousel__slide:nth-child(1)').addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', () => {
          // remove .active
          $('.carousel__slide--active').removeClass('carousel__slide--active');
          $('.di-vao-tu-ben-trai').addClass('carousel__slide--active').removeClass('di-vao-tu-ben-trai');
        });
      } else {
        $('.carousel__slide--active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', () => {
          $('.bien-mat-o-ben-phai').removeClass('bien-mat-o-ben-phai');
        });

        $('.carousel__slides .carousel__slide:last-child').addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', () => {
          // remove .active
          $('.carousel__slide--active').removeClass('carousel__slide--active');
          $('.di-vao-tu-ben-trai').addClass('carousel__slide--active').removeClass('di-vao-tu-ben-trai');
        });
      }
    });
    // const { activeIndex } = this.state;
    // let index = activeIndex;
    // const items = this.carouselSlidesData;
    // const slidesLength = items.length;

    // if (index < 1) {
    //   index = slidesLength;
    // }
    // index -= 1;

    // this.setState({
    //   activeIndex: index,
    // });
  }

  goToSlide(index) {
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
