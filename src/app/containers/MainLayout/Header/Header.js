import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState(prevState => ({ showMenu: prevState.showMenu }));
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed navbar-dark">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={() => this.handleMenuClick()}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar">a</span>
              <span className="icon-bar">b</span>
              <span className="icon-bar">c</span>
            </button>
            <NavLink className="navbar-brand" to="/">BLINK</NavLink>
          </div>

          <div className={`collapse navbar-collapse ${prevState => (prevState.showMenu ? 'in' : '')}`}>
            <ul className="nav navbar-nav">
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/login">Logout</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
