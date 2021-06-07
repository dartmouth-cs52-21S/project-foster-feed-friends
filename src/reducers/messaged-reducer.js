import { ActionTypes } from '../actions';
// error state initially
const initialState = {
  messaged: [],
  current: {},
};

// a reducer to raise and clear axios errors
const MessagedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGED_MENTOR:
      return { ...state, messaged: action.payload };
    default:
      return state;
  }
};

export default MessagedReducer;
