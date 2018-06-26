import userRestService from '@/api/userRest';

export const updateToken = (token) => {
  localStorage.setItem('token', token);
  return {
    type: 'UPDATE_TOKEN',
    payload: token,
  };
};

export const updateProfile = (profile) => {
  localStorage.setItem('profile', profile);
  return {
    type: 'UPDATE_PROFILE',
    payload: profile,
  };
};

export const loginResponse = (type) => {
  localStorage.setItem('type', type);
  return {
    type: 'LOGIN_RESPONE',
    payload: type,
  };
  // return { type };
};
export const login = (dispatch, payload) => {
  userRestService.login(payload.email, payload.password)
    .then((res) => {
      dispatch(updateToken(res.data.auth_token));
      dispatch(updateProfile(res.data));
      dispatch(loginResponse('LOGIN_CLEAR_ERROR'));
    })
    .catch((err) => {
      dispatch(updateToken(''));
      dispatch(loginResponse('LOGIN_SET_ERROR'));
      throw err;
    });
};

export const retrieveCurrentUser = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    userRestService.getLoginUserByToken()
      .then((res) => {
        dispatch(updateProfile(res.data));
      })
      .catch(() => {
        dispatch(updateToken(''));
      });
  }
};
