import { ActionTypes } from '../actions';

const initial = {
  org: {},
};

const orgReducer = (state = initial, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      console.log(action.payload);
      return { ...state, org: action.payload };
    default:
      return state;
  }
};
export default orgReducer;
