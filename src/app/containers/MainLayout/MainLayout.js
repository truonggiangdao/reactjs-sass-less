import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

import Home from '../Home';
import Profile from '../Profile';
import './MainLayout.scss';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { match } = this.props;
    return (
      <div className="header-fixed">
        <Header />
        <div>
          <Route path={`${match.path}profile`} component={Profile} />
          <Route exact path={match.path} component={Home} />
        </div>
      </div>
    );
  }
}
MainLayout.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
export default MainLayout;
