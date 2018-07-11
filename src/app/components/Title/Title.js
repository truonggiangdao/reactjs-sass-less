import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

class Title extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { title } = this.props;
    return (
      <div className="title"><h1>{title}</h1></div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
