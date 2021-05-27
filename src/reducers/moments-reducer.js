import { ActionTypes } from '../actions';

const initialState = {
  allMoments: [],
  currentMoment: {},
};

const MomentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOMENTS:
      return { ...state, allMoments: action.payload };
    case ActionTypes.FETCH_MOMENT:
      return { ...state, currentMoment: action.payload };
    default:
      return state;
  }
};

export default MomentsReducer;
