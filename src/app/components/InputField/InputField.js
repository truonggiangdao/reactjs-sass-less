import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.inputEl = React.createRef();
  }

  onChange(event) {
    const { onChange } = this.props;
    if (onChange && onChange.constructor === Function) {
      onChange(event, event.target.value);
    }
  }

  render() {
    const {
      label, required, type, name,
    } = this.props;
    const { value } = this.props;
    const { errors } = this.props;
    return (
      <div className="group-input-field">
        <label
          className="input-field-label"
          htmlFor={name}
          onClick={() => this.inputEl.current.focus()}
          role="none"
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
            defaultValue={value}
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default InputField;
