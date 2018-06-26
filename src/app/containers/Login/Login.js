import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Login.scss';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Link from '@/components/Link';
import validator, { INPUT_FIELDS } from '@/helpers/validator';
import PropTypes from 'prop-types';
import { login } from '@/store/userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      loading: false,
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
    this.validateLogin = this.validateLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  validateEmail = (value) => {
    const result = validator.validateEmail(value);
    const { errors } = this.state;
    if (!result.valid) {
      this.setState({
        email: value,
        errors: {
          errors,
          email: result.errors[0],
        },
      });
      return false;
    }
    this.setState({
      email: value,
      errors: {
        errors,
        email: '',
      },
    });
    return true;
  };

  validatePassword = (value) => {
    const result = validator.validatePassword(value);
    const { errors } = this.state;
    if (!result.valid) {
      this.setState({
        password: value,
        errors: {
          errors,
          password: result.errors[0],
        },
      });
      return false;
    }
    this.setState({
      password: value,
      errors: {
        errors,
        password: '',
      },
    });
    return true;
  };

  handleFieldChange = (field, value) => {
    switch (field) {
      case INPUT_FIELDS.EMAIL:
        this.validateEmail(value);
        break;
      case INPUT_FIELDS.PASSWORD:
        this.validatePassword(value);
        break;
      default:
        break;
    }
  };

  validateLogin() {
    const { email, password } = this.state;

    return this.validateEmail(email)
      && this.validatePassword(password);
  }

  handleLogin() {
    const { email, password } = this.state;
    const { processloginRequest, history } = this.props;
    if (this.validateLogin()) {
      this.setState({ loading: true });
      processloginRequest(
        email,
        password,
      )
        .then(() => {
          history.push('/profile');
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    const { errors, loading } = this.state;
    const { error } = this.props;
    return (
      <div className="container-login">
        <div className="wrapper-login">
          <div className="logo">
            <NavLink to="/">
              <strong className="blink-logo">Bliink</strong>
            </NavLink>
          </div>
          <div className="form-login-wrapper">
            <span className="title-login">Sign In</span>
            <InputField
              type="email"
              name="email"
              label="Email"
              required
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.EMAIL, val)}
              errors={errors.email}
            />

            <InputField
              type="password"
              name="password"
              label="Password"
              required
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.PASSWORD, val)}
              errors={errors.password}
            />
            {
              loading && (
                <p className="text-info">Loading...</p>
              )
            }
            {
              error && (
                <p className="text-danger">{error}</p>
              )
            }
            <div className="btn-login">
              <Button primary block name="login" text="SIGN IN" onClick={() => this.handleLogin()} />
            </div>
            <div className="text-center link-forgot-password">
              <Link text="Forgot password?" href="https://youtube.com" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  processloginRequest: PropTypes.element.isRequired,
  history: PropTypes.element.isRequired,
  error: PropTypes.element.isRequired,
};
const mapStateToProps = state => ({ error: state.login.error });

const mapDispatchToProps = dispatch => ({
  processloginRequest: (email, password) => ({ return: login(dispatch, { email, password }) }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
