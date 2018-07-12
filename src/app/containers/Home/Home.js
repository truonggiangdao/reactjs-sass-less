import React, { Component } from 'react';
import './Home.scss';
import Carousel from '@/components/Carousel';
import LoadPicture from '@/components/LoadPicture';
import ListImage from '@/components/ListImage';
import Intro from '@/components/Intro';
import $ from 'jquery';
import {
  TimelineMax, Bounce,
} from 'gsap/TweenMax';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    $(document.body).scroll(() => {
      console.log($(this).scrollTop());
    });
    const effect = new TimelineMax({ paused: true });
    effect.from('.name', 0.5, { scale: 2, opacity: 0 })
      .to('.name', 0.5, { scale: 1, opacity: 1 })
      .from('.introduce', 1, { x: 500, opacity: 0 })
      .from('.header-fixed', 1, { y: -50, opacity: 0.5, ease: Bounce.easeOut })
      .from('.slider', 1, { opacity: 0, y: 100, ease: Bounce.easeOut })
      .from('.hr', 0.5, { x: -1000, opacity: 0 });

    const gallery1 = new TimelineMax({ paused: true });
    gallery1.staggerFrom('img.img-fluid.r1-c1', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery2 = new TimelineMax({ paused: true });
    gallery2.staggerFrom('img.img-fluid.r1-c2', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery3 = new TimelineMax({ paused: true });
    gallery3.staggerFrom('img.img-fluid.r1-c3', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery4 = new TimelineMax({ paused: true });
    gallery4.staggerFrom('img.img-fluid.r2-c1', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery5 = new TimelineMax({ paused: true });
    gallery5.staggerFrom('img.img-fluid.r2-c2', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery6 = new TimelineMax({ paused: true });
    gallery6.staggerFrom('img.img-fluid.r2-c3', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery7 = new TimelineMax({ paused: true });
    gallery7.staggerFrom('img.img-fluid.r3-c1', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery8 = new TimelineMax({ paused: true });
    gallery8.staggerFrom('img.img-fluid.r3-c2', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery9 = new TimelineMax({ paused: true });
    gallery9.staggerFrom('img.img-fluid.r3-c3', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery10 = new TimelineMax({ paused: true });
    gallery10.staggerFrom('img.img-fluid.r4-c1', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery11 = new TimelineMax({ paused: true });
    gallery11.staggerFrom('img.img-fluid.r4-c2', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    const gallery12 = new TimelineMax({ paused: true });
    gallery12.staggerFrom('img.img-fluid.r4-c3', 1, {
      opacity: 0, y: 300,
    }, 0.5);
    function Gallery() {
      const offset1 = $('img.img-fluid.r1-c1').offset();
      console.log(offset1);
      const offset2 = $('img.img-fluid.r1-c2').offset();
      const offset3 = $('img.img-fluid.r1-c3').offset();
      const offset4 = $('img.img-fluid.r2-c1').offset();
      const offset5 = $('img.img-fluid.r2-c2').offset();
      const offset6 = $('img.img-fluid.r2-c3').offset();
      const offset7 = $('img.img-fluid.r3-c1').offset();
      const offset8 = $('img.img-fluid.r3-c2').offset();
      const offset9 = $('img.img-fluid.r3-c3').offset();
      const offset10 = $('img.img-fluid.r4-c1').offset();
      const offset11 = $('img.img-fluid.r4-c2').offset();
      const offset12 = $('img.img-fluid.r4-c3').offset();
      $(window).scroll(() => {
        if ($(window).scrollTop() >= (offset1.top - 500)) {
          gallery1.play();
          if ($(window).scrollTop() >= (offset2.top - 500)) {
            gallery2.play();
          }
          if ($(window).scrollTop() >= (offset3.top - 500)) {
            gallery3.play();
          }
          if ($(window).scrollTop() >= (offset4.top - 500)) {
            gallery4.play();
          }
          if ($(window).scrollTop() >= (offset5.top - 500)) {
            gallery5.play();
          }
          if ($(window).scrollTop() >= (offset6.top - 500)) {
            gallery6.play();
          }
          if ($(window).scrollTop() >= (offset7.top - 500)) {
            gallery7.play();
          }
          if ($(window).scrollTop() >= (offset8.top - 500)) {
            gallery8.play();
          }
          if ($(window).scrollTop() >= (offset9.top - 500)) {
            gallery9.play();
          }
          if ($(window).scrollTop() >= (offset10.top - 500)) {
            gallery10.play();
          }
          if ($(window).scrollTop() >= (offset11.top - 500)) {
            gallery11.play();
          }
          if ($(window).scrollTop() >= (offset12.top - 500)) {
            gallery12.play();
          }
        }
      });
    }
    function show() {
      effect.play();
    }
    const showGallery = new TimelineMax({ onComplete: Gallery });
    console.log(showGallery);
    // showGallery.staggerFrom('img.img-fluid.r1-c1', 1, { opacity: 0 }, 0.5)
    //   .staggerFrom('img.img-fluid.r1-c2', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r1-c3', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r2-c1', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r2-c2', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r2-c3', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r3-c1', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r3-c2', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r3-c3', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r4-c1', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r4-c2', 1, { opacity: 0, y: 300 }, 0.5)
    //   .staggerFrom('img.img-fluid.r4-c3', 1, { opacity: 0, y: 300 }, 0.5);
    const showContentWeb = new TimelineMax({ onComplete: show });
    showContentWeb.from('.img-load.text-center', 1.5, { opacity: 0 })
      .to('.img-load.text-center', 1, { opacity: 1 })
      .to('.img-load.text-center', 1, { opacity: 0 });
  }

  render() {
    return (
      <div>
        <LoadPicture />
        <div className="container">
          <Carousel />
          <Intro />
          <hr className="hr" />
          <ListImage />
        </div>
      </div>
    );
  }
}


export default Home;
