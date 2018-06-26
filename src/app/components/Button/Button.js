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

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('this is', this);
  }

  render() {
    const {
      primary, block, text,
    } = this.props;
    return (
      <button
        type="button"
        className={`button ${primary ? 'button-primary' : ''} ${block ? 'button-block' : ''}`}
        text={text || 'Button'}
        onClick={e => this.onClick(e)}
      >
        { text || 'Button'}
      </button>
    );
  }
}
Button.propTypes = {
  primary: PropTypes.bool.isRequired,
  block: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
