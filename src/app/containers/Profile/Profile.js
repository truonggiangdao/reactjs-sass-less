import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageTitle from '@/components/PageTitle';
import ProfileForm from './ProfileForm';
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <PageTitle title="Profile" />
        <div className="layout-container profile-container">
          { user.id && (
            <ProfileForm user={user} />
          )}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({ user: state.user });


export default connect(mapStateToProps)(Profile);
