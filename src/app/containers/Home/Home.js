import React, { Component } from 'react';
import './Home.scss';
import Carousel from '@/components/Carousel';
import LoadPicture from '@/components/LoadPicture';
import ListImage from '@/components/ListImage';
import Intro from '@/components/Intro';
import {
  TimelineMax, Linear, Elastic,
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
      .from('.header-fixed', 1, { y: -50, opacity: 0.5 })
      .from('.slider', 1, { opacity: 0, y: 100 })
      .from('.hr', 0.5, { x: -1000, opacity: 0 })
      .staggerFrom('.list-images', 0.6, {
        y: 100, opacity: 0, scale: 2, ease: Elastic.easeOut.config(1, 0.3),
      }, 0.1);
    function show() {
      effect.play();
    }
    const tl = new TimelineMax({ paused: true });
    tl.staggerFrom('.list-images', 1, { rotationX: 360, ease: Linear.easeOut }, 0.03);
    const showContentWeb = new TimelineMax({ onComplete: show });
    showContentWeb.from('.img-load.text-center', 1.5, { scale: 2, opacity: 0 })
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
