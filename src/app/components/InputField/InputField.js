import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './InputField.scss';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
    this.inputEl = React.createElement();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const onChange = this.props;
    if (onChange && onChange.constructor === Function) {
      onChange(event, event.target.value);
    }
  }

  render() {
    // const label = this.props;
    // const required = this.props;
    // const name = this.props;
    // const type = this.props;
    // const value = this.props;
    const [name, type, value, errors, label, required] = this.props;
    return (
      <div className="group-input-field">
        <label
          className="input-field-label"
          htmlFor={[name]}
          onClick={this.inputEl.current.focus()}
          role="presentation"
        >
          {label || ''}
          { required && (
            <span className="input-field-required">*</span>
          )}:
          <input
            className="input-field"
            ref={this.inputEl}
            type={type}
            name={name}
            placeholder={label || ''}
            onKeyUp={() => this.onChange()}
            onBlur={() => this.onChange()}
            defaultValue={value}
          />
        </label>
        <div className="error">{errors}</div>
      </div>
    );
  }
}
// InputField.propTypes = {
//   errors: PropTypes.element.isRequired,
//   label: PropTypes.element.isRequired,
//   required: PropTypes.element.isRequired,
//   name: PropTypes.element.isRequired,
//   type: PropTypes.element.isRequired,
//   value: PropTypes.element.isRequired,
// };
export default InputField;
