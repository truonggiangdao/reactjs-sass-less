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
    const effect = new TimelineMax({ paused: true });
    effect.from('.name', 0.5, { scale: 2, opacity: 0 })
      .to('.name', 0.5, { scale: 1, opacity: 1 })
      .from('.introduce', 1, { x: 500, opacity: 0 })
      .from('.header-fixed', 1, { y: -50, opacity: 0.5, ease: Bounce.easeOut })
      .from('.slider', 1, { opacity: 0, y: 100, ease: Bounce.easeOut })
      .from('.hr', 0.5, { x: -1000, opacity: 0 });
    function Gallery() {
      const gallery1 = new TimelineMax({ paused: true });
      gallery1.staggerFrom('img.img-fluid.r1-c1', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery2 = new TimelineMax({ paused: true });
      gallery2.staggerFrom('img.img-fluid.r1-c2', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery3 = new TimelineMax({ paused: true });
      gallery3.staggerFrom('img.img-fluid.r1-c3', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery4 = new TimelineMax({ paused: true });
      gallery4.staggerFrom('img.img-fluid.r2-c1', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery5 = new TimelineMax({ paused: true });
      gallery5.staggerFrom('img.img-fluid.r2-c2', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery6 = new TimelineMax({ paused: true });
      gallery6.staggerFrom('img.img-fluid.r2-c3', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery7 = new TimelineMax({ paused: true });
      gallery7.staggerFrom('img.img-fluid.r3-c1', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery8 = new TimelineMax({ paused: true });
      gallery8.staggerFrom('img.img-fluid.r3-c2', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery9 = new TimelineMax({ paused: true });
      gallery9.staggerFrom('img.img-fluid.r3-c3', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery10 = new TimelineMax({ paused: true });
      gallery10.staggerFrom('img.img-fluid.r4-c1', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery11 = new TimelineMax({ paused: true });
      gallery11.staggerFrom('img.img-fluid.r4-c2', 1, {
        opacity: 0, y: 300,
      }, 1);
      const gallery12 = new TimelineMax({ paused: true });
      gallery12.staggerFrom('img.img-fluid.r4-c3', 1, {
        opacity: 0, y: 300,
      }, 1);
      const offset1 = $('img.img-fluid.r1-c1').offset().top;
      const offset2 = $('img.img-fluid.r1-c2').offset().top;
      const offset3 = $('img.img-fluid.r1-c3').offset().top;
      const offset4 = $('img.img-fluid.r2-c1').offset().top;
      const offset5 = $('img.img-fluid.r2-c2').offset().top;
      const offset6 = $('img.img-fluid.r2-c3').offset().top;
      const offset7 = $('img.img-fluid.r3-c1').offset().top;
      const offset8 = $('img.img-fluid.r3-c2').offset().top;
      const offset9 = $('img.img-fluid.r3-c3').offset().top;
      const offset10 = $('img.img-fluid.r4-c1').offset().top;
      const offset11 = $('img.img-fluid.r4-c2').offset().top;
      const offset12 = $('img.img-fluid.r4-c3').offset().top;
      $(window).on('scroll', () => {
        if ($(window).scrollTop() >= (offset1 - window.innerHeight)) {
          gallery1.play();
        }
        if ($(window).scrollTop() >= (offset2 - window.innerHeight)) {
          gallery2.play();
        }
        if ($(window).scrollTop() >= (offset3 - window.innerHeight)) {
          gallery3.play();
        }
        if ($(window).scrollTop() >= (offset4 - window.innerHeight)) {
          gallery4.play();
        }
        if ($(window).scrollTop() >= (offset5 - window.innerHeight)) {
          gallery5.play();
        }
        if ($(window).scrollTop() >= (offset6 - window.innerHeight)) {
          gallery6.play();
        }
        if ($(window).scrollTop() >= (offset7 - window.innerHeight)) {
          gallery7.play();
        }
        if ($(window).scrollTop() >= (offset8 - window.innerHeight)) {
          gallery8.play();
        }
        if ($(window).scrollTop() >= (offset9 - window.innerHeight)) {
          gallery9.play();
        }
        if ($(window).scrollTop() >= (offset10 - window.innerHeight)) {
          gallery10.play();
        }
        if ($(window).scrollTop() >= (offset11 - window.innerHeight)) {
          gallery11.play();
        }
        if ($(window).scrollTop() >= (offset12 - window.innerHeight)) {
          gallery12.play();
        }
      });
      $(window).on('touchmove', (e) => {
        const touch = e.touches[0];
        console.log(Math.floor(touch.pageY));
        if (touch.pageY >= (offset1)) {
          gallery1.play();
        }
        if (touch.pageY > (offset2 + 32)) {
          gallery2.play();
        }
        if (touch.pageY >= (offset3 + 250)) {
          gallery3.play();
        }
        if (touch.pageY >= (offset4) + 400) {
          gallery4.play();
        }
        if (touch.pageY >= (offset5) + 600) {
          gallery5.play();
        }
        if (touch.pageY >= (offset6 + 800)) {
          gallery6.play();
        }
        if (touch.pageY >= offset7 + 1000) {
          gallery7.play();
        }
        if (touch.pageY >= (offset8 + 1000)) {
          gallery8.play();
        }
        if (touch.pageY >= offset9 + 1000) {
          gallery9.play();
        }
        if (touch.pageY >= offset10 + 1000) {
          gallery10.play();
        }
        if (touch.pageY >= offset11 + 1000) {
          gallery11.play();
        }
        if (touch.pageY >= offset12 + 1000) {
          gallery12.play();
        }
      });
    }
    function show() {
      effect.play();
    }
    const showGallery = new TimelineMax({ onComplete: Gallery });
    showGallery.staggerFrom('img.img-fluid.r1-c1', 0.01, { opacity: 0 })
      .staggerFrom('img.img-fluid.r1-c2', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r1-c3', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r2-c1', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r2-c2', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r2-c3', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r3-c1', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r3-c2', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r3-c3', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r4-c1', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r4-c2', 0.001, { opacity: 0, y: 300 }, 0.5)
      .staggerFrom('img.img-fluid.r4-c3', 0.001, { opacity: 0, y: 300 }, 0.5);
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
