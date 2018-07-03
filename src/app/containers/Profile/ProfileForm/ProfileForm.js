import React, { Component } from 'react';
import ProfilePicture from '@/components/ProfilePicture';
import './ProfileForm.scss';
import PropTypes from 'prop-types';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { INPUT_FIELDS } from '@/helpers/validator';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      user: {
        ...props.user,
      },
    };
  }

  componentDidMount() {
    // const { user } = this.state;
    // console.log(user);
  }

  handleClick() {
    return this;
  }

  handleFieldChange(field, value) {
    let fieldKey;
    switch (field) {
      case INPUT_FIELDS.FIRST_NAME:
        fieldKey = 'firstName';
        break;

      case INPUT_FIELDS.LAST_NAME:
        fieldKey = 'lastName';
        break;
      default:
        fieldKey = 'email';
        break;
    }
    // console.log(fieldKey, value);
    const { ...user } = this.state;
    user[fieldKey] = value;
    this.setState({ user });
    // console.log(user);
  }

  render() {
    const { user } = this.state;
    return (
      <div className="profile-form padding-lg">
        <div className="row padding-lg-top">
          <div className="col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4">
            <ProfilePicture />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-6">
            <InputField
              type="firstName"
              name="firstName"
              label={INPUT_FIELDS.FIRST_NAME}
              value={user.firstName}
              errors=""
              required
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.FIRST_NAME, val)}
            />
          </div>
          <div className="col-xs-6">
            <InputField
              type="lastName"
              name="lastName"
              errors=""
              required
              label={INPUT_FIELDS.LAST_NAME}
              value={user.lastName}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.LAST_NAME, val)}
            />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-12">
            <InputField
              type="email"
              name="email"
              errors=""
              required
              label={INPUT_FIELDS.EMAIL}
              value={user.email}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.EMAIL, val)}
            />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-6 text-left">
            <Button primary={false} block text="EDIT PASSWORD" onClick={() => this.handleClick()} handleClickEvent={() => this.handleClick()} />
          </div>
          <div className="col-xs-6 text-right">
            <Button primary block text="VALIDATE" onClick={() => this.handleClick()} handleClickEvent={() => this.handleClick()} />
          </div>
        </div>
      </div>
    );
  }
}
ProfileForm.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};
export default ProfileForm;
