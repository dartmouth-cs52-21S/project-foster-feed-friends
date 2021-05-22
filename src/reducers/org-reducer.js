import { ActionTypes } from '../actions';

const initial = {};

const orgReducer = (state = initial, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default orgReducer;
