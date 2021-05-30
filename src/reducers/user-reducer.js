import { ActionTypes } from '../actions';

const initial = {
  user: {},
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      console.log('state and payload: ', { ...state, user: action.payload });
      return { ...state, user: action.payload };
    case ActionTypes.USER_CLEAR:
      console.log(action.payload);
      return { ...state, user: {} };
    case ActionTypes.UPDATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export default userReducer;
