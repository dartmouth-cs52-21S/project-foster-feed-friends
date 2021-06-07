import { ActionTypes } from '../actions';
// user intial state holding the current user
const initial = {
  user: {},
};
// reducer to handle the current user signing in/out/update actions
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      return { ...state, user: action.payload };
    case ActionTypes.USER_CLEAR:
      return { ...state, user: {} };
    case ActionTypes.UPDATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export default userReducer;
