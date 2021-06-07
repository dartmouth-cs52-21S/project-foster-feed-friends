import { ActionTypes } from '../actions';
// all moments and current moment state initially
const initialState = {
  allMoments: [],
  currentMoment: {},
};
// reducer to handle the moments actions
const MomentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOMENTS:
      return { ...state, allMoments: action.payload };
    case ActionTypes.FETCH_MOMENT:
      return { ...state, currentMoment: action.payload };
    case ActionTypes.CREATE_MOMENT:
      return { ...state, allMoments: [...state.allMoments, action.payload] };
    case ActionTypes.MOMENTS_CLEAR:
      return { ...state, allMoments: [] };
    case ActionTypes.MOMENT_CLEAR:
      return { ...state, currentMoment: {} };
    default:
      return state;
  }
};

export default MomentsReducer;
