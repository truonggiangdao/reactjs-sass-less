import React, { Component } from 'react';
import './Intro.scss';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="content text-center">
        <h2 className="name">Hello, My name is Dong</h2>
        <p className="introduce">This is my first animation</p>
      </div>
    );
  }
}


export default Intro;
