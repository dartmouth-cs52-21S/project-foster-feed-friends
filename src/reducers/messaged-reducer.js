import { ActionTypes } from '../actions';
// messaged inital state for users the current user has messaged
const initialState = {
  messaged: [],
};

// a reducer to fetch messaged user account
const MessagedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGED_MENTOR:
      return { ...state, messaged: action.payload };
    default:
      return state;
  }
};

export default MessagedReducer;
