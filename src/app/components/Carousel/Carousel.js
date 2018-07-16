import React, { Component } from 'react';
import './Carousel.scss';
import Slider from 'react-slick';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const settings = {
      // className: 'center slider variable-width',
      className: 'center slider',
      centerMode: true,
      // centerPadding: '4rem',
      // variableWidth: true,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      // autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>
            <img className="img-responsive" src="https://dw9to29mmj727.cloudfront.net/promo/2016/5248-SeriesHeaders_NARSHP_2000x800.jpg" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img className="img-responsive" src="https://ctd-thechristianpost.netdna-ssl.com/en/full/51770/naruto-shippuden.jpg" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img className="img-responsive" src="http://taihinhnendep.biz/content/uploads/2015/01/tai-hinh-nen-naruto-vs-sasuke-176-1.jpeg" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img className="img-responsive" src="https://blog.uptodown.com/wp-content/uploads/naruto-boruto-ninja-voltage-featured.jpg" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img className="img-responsive" src="https://genknews.genkcdn.vn/thumb_w/640/2017/untitled-1-1505638397014.jpg" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img className="img-responsive" src="https://vignette.wikia.nocookie.net/onepiecetreasurecruiseglobal/images/2/2e/C1753.png/revision/latest?cb=20171215215959" alt="" />
          </h3>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
