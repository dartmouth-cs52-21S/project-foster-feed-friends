import { ActionTypes } from '../actions';
// error state initially
const initialState = {
  messaged: [],
  current: {},
};

// a reducer to raise and clear axios errors
const MessagedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MENTORS:
      return { ...state, all: action.payload };
    case ActionTypes.FETCH_EVENTS:
      return { ...state, current: action.payload };
    case ActionTypes.FETCH_EVENT:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default MessagedReducer;
