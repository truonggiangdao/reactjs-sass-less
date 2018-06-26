import React, { Component } from 'react';

import './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const primary = this.props;
    const block = this.props;
    const text = this.props;
    return (
      <button
        type="button"
        className={`button ${primary ? 'button-primary' : ''} ${block ? 'button-block' : ''}`}
        text={text || 'Button'}
        onClick={() => this.prop.onClick()}
      >
        { text || 'Button'}
      </button>
    );
  }
}


export default Button;
