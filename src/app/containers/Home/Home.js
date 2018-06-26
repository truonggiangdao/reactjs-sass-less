import React, { Component } from 'react';
import './Home.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container">
        <h1 className="homepage-title">Home Page</h1>
      </div>
    );
  }
}
export default Home;
