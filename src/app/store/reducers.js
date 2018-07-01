
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
      this.state = {
        ...state,
        token: action.payload,
      };
      break;
    case 'UPDATE_PROFILE':
      this.state = {
        ...state,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
      break;

    default:
      break;
  }
  console.log(state);
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
