import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

// const Link = props => (
//   <div className="">
//     <a className="link-text" text={props.text} href="a">{props.text}</a>
//   </div>
// );
class Link extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { text } = this.props;
    return (
      <div className="">
        <a className="link-text" text={text} href="a">{text}</a>
      </div>
    );
  }
}

Link.propTypes = {
  text: PropTypes.element.isRequired,
};
export default Link;
