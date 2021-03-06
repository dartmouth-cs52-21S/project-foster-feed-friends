import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  userId: '',
};

// authentication reducer
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true, userId: action.payload };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false, userID: '' };
    default:
      return state;
  }
};

export default AuthReducer;
