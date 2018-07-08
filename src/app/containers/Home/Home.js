import React, { Component } from 'react';
import './Home.scss';
import Slider from 'react-slick';
// import $ from 'jquery';
import { TimelineMax, Linear } from 'gsap/TweenMax';
// import Draggable from "gsap/Draggable";
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const effect = new TimelineMax({ paused: true });
    effect.from('.name', 0.5, { scale: 2, opacity: 0 })
      .to('.name', 0.5, { scale: 1, opacity: 1 })
      .from('.introduce', 1, { x: 500, opacity: 0 })
      .from('.header-fixed', 1, { y: -50, opacity: 0.5 })
      .from('.slider', 1, { opacity: 0, y: 100 })
      .from('.hr', 0.5, { x: -1000, opacity: 0 })
      .staggerFrom('.product', 0.6, { y: 100, opacity: 0 }, 0.2)
      .staggerFrom('.btn-primary', 1, { opacity: 0, scale: 2 }, 0.2);
    function show() {
      effect.play();
    }
    const tl = new TimelineMax({ paused: true });
    tl.staggerTo('.btn-primary', 1, { rotationX: 360, ease: Linear.easeOut }, 0.03);
    tl.staggerTo('.btn-primary', 1, { rotationX: 360, ease: Linear.easeOut }, 0.03);
    const showContentWeb = new TimelineMax({ onComplete: show });
    showContentWeb.from('.img-load.text-center', 1.5, { scale: 2, opacity: 0 })
      .to('.img-load.text-center', 1, { opacity: 1 })
      .to('.img-load.text-center', 1, { opacity: 0 });
  }

  render() {
    const settings = {
      className: 'center slider variable-width',

      centerMode: true,
      centerPadding: '60px',

      // variableWidth: true,

      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <div>
        <div className="load">
          <div className="img-load text-center">
            <img className="image-gs" src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy-preview.gif" alt="" />
          </div>
        </div>
        <div className="container">
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
          <div className="conten text-center">
            <h2 className="name">Hello, My name is Dong</h2>
            <p className="introduce">This is my first animation</p>
          </div>
          <hr className="hr" />
          <div className="products">
            <div className="row">
              <div className="col-sm-4">
                <div className="product">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <img className="img-product" src="http://i2.imacdn.com/vg/2017/03/11/c5fadf0970120b37_29282a17da1c0fff_457001489246401326121.jpg" alt="" />
                      </h3>
                    </div>
                    <div className="panel-body">
                      Boruto: Naruto Next Generations
                    </div>
                    <div className="panel-footer">
                      <button type="button" className="btn btn-primary">Watch now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <img className="img-product" src="http://i.imacdn.com/vg/2015/05/naruto-dattebayo-large-1432284981.jpg" alt="" />
                      </h3>
                    </div>
                    <div className="panel-body">
                      Naruto: Naruto Dattebayo
                    </div>
                    <div className="panel-footer">
                      <button type="button" className="btn btn-primary">Watch now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <img className="img-product" src="http://i.imacdn.com/vg/2016/07/01/7c868aa86063686d_d749742c8f567c0c_44135146734386613.jpg" alt="" />
                      </h3>
                    </div>
                    <div className="panel-body">
                      Naruto: Naruto Next Generations
                    </div>
                    <div className="panel-footer">
                      <button type="button" className="btn btn-primary">Watch now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="product">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <img className="img-product" src="http://i.imacdn.com/vg/2016/05/vua-hai-tac-thumbnail-1462767698.jpg" alt="" />
                      </h3>
                    </div>
                    <div className="panel-body">
                      Onepiece: Vua Hải Tặc
                    </div>
                    <div className="panel-footer">
                      <button type="button" className="btn btn-primary">Watch now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="product">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <img className="img-product" src="http://i.imacdn.com/vg/2016/01/one-piece-the-movie-thumbnail-1452652857.jpg" alt="" />
                      </h3>
                    </div>
                    <div className="panel-body">
                      One Pice The Movie
                    </div>
                    <div className="panel-footer">
                      <button type="button" className="btn btn-primary">Watch now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="product">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <img className="img-product" src="http://i.imacdn.com/vg/2015/05/one-piece-ova-i-defeat-the-pirate-ganzack-large-1432284991.jpg" alt="" />
                      </h3>
                    </div>
                    <div className="panel-body">
                      One Piece OVA I: Defeat the Pirate Ganzack
                    </div>
                    <div className="panel-footer">
                      <button type="button" className="btn btn-primary">Watch now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
