
import { combineReducers } from 'redux';

const userReducer = (state = {
  id: '',
  token: '',
  firstName: '',
  lastName: '',
  email: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_TOKEN':
      return {
        ...state,
        token: action.payload.token,
      };
      // break;
    case 'UPDATE_PROFILE':
      return {
        ...state,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
      // break;

    default:
      break;
  }
  return state;
};
const loginReducer = (state = { error: '' }, action) => {
  switch (action.type) {
    case 'LOGIN_SET_ERROR':
      return {
        ...state,
        error: 'Login failed',
      };

    case 'LOGIN_CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  login: loginReducer,
});
