import { ActionTypes } from '../actions';
// all events and current fetched event state initially
const initialState = {
  all: [],
  current: {},
};

// a reducer to handle the event actions
const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EVENT_CREATE:
      return { ...state, event: action.payload };
    case ActionTypes.FETCH_EVENTS:
      return { ...state, all: action.payload };
    case ActionTypes.FETCH_EVENT:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default EventReducer;
