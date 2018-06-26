import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

// const Button = props => (
//   <button
//     type="button"
//     className={`button ${props.primary ? 'button-primary' : ''}
// ${props.block ? 'button-block' : ''}`}
//     text={props.text || 'Button'}
//     onClick={() => props.onClick()}>
//     {props.text || 'Button'}
//   </button>
// );
class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      primary, block, text, props,
    } = this.props;
    return (
      <button
        type="button"
        className={`button ${primary ? 'button-primary' : ''} ${block ? 'button-block' : ''}`}
        text={text || 'Button'}
        onClick={() => props.onClick()}
      >
        { text || 'Button'}
      </button>
    );
  }
}
Button.propTypes = {
  primary: PropTypes.element.isRequired,
  block: PropTypes.element.isRequired,
  text: PropTypes.element.isRequired,
  props: PropTypes.element.isRequired,
};

export default Button;
