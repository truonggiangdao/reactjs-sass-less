import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PageTitle.scss';

class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { title } = this.props;
    return (
      <div className="page-header-title">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.element.isRequired,
};

export default PageTitle;
