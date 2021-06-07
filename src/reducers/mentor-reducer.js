import { ActionTypes } from '../actions';
// all mentors and current mentor fetched event state initially
const initialState = {
  allMentors: [],
  currentMentor: {},
};
// reducer to handle mentor actions
const mentorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MENTORS:
      return { ...state, allMentors: action.payload };
    case ActionTypes.FETCH_MENTOR:
      return { ...state, currentMentor: action.payload };
    default:
      return state;
  }
};

export default mentorReducer;
