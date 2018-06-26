import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.inputEl = React.createRef();
    this.value = React.createRef();
  }

  onChange(event) {
    const onChange = this.props;
    if (onChange && onChange.constructor === Function) {
      this.onChange(event, event.target.value);
    }
  }

  render() {
    const {
      errors, label, required, type, name,
    } = this.props;

    return (
      <div className="group-input-field">
        <label
          className="input-field-label"
          htmlFor={name}
          // onClick={() => this.inputEl.current.focus()}
          // onKeyUp={() => this.inputEl.current.focus()}
        >
          {label || ''}
          {required && (
            <span className="input-field-required">*</span>
          )}:
          <input
            className="input-field"
            ref={this.inputEl}
            type={type}
            name={name}
            placeholder={label || ''}
            onKeyUp={evt => this.onChange(evt)}
            onBlur={evt => this.onChange(evt)}
            defaultValue={this.value}
          />
        </label>
        <div className="error">{errors}</div>
      </div>
    );
  }
}
InputField.propTypes = {
  errors: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
export default InputField;
