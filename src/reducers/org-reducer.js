import { ActionTypes } from '../actions';

const initial = {
  org: {},
};

const orgReducer = (state = initial, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      console.log(action.payload);
      return { ...state, org: action.payload };
    case ActionTypes.USER_CLEAR:
      console.log(action.payload);
      return { ...state, org: {} };

    default:
      return state;
  }
};
export default orgReducer;
