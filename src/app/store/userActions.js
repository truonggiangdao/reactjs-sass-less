import userRestService from '@/api/userRest';

export const updateToken = (token) => {
  localStorage.setItem('token', token);
  return {
    type: 'UPDATE_TOKEN',
    payload: token,
  };
};

// export const updateProfile = profile => ({ type: 'UPDATE_PROFILE', payload: profile });

export const updateProfile = profile => ({
  type: 'UPDATE_PROFILE',
  payload: profile,
});


export const loginResponse = type => ({ type });

export const login = (dispatch, payload) => userRestService.login(payload.email, payload.password)
  .then((res) => {
    dispatch(updateToken(res.data.token));
    dispatch(updateProfile(res.data));
    dispatch(loginResponse('LOGIN_CLEAR_ERROR'));
  })
  .catch((err) => {
    dispatch(updateToken(''));
    dispatch(loginResponse('LOGIN_SET_ERROR'));
    throw err;
  });


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
