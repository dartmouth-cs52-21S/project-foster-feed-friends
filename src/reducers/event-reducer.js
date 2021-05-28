import { ActionTypes } from '../actions';
// error state initially
const initialState = {
  all: [],
  current: {},
};

// a reducer to raise and clear axios errors
const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EVENT_CREATE:
      return { ...state, event: action.payload };
    default:
      return state;
  }
};

export default EventReducer;
