import { ActionTypes } from '../actions';
// error state initially
const initialState = {
  error: '',
};

// a reducer to raise and clear axios errors
const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ERROR_CLEAR:
      return { ...state, error: '' };
    case ActionTypes.ERROR_SET:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default ErrorReducer;
