import { ActionTypes } from '../actions';

const initialState = {
  allMentors: [],
  currentMentor: {},
};

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
