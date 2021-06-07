import { ActionTypes } from '../actions';

const initialState = {
  allMoments: [],
  currentMoment: {},
};

const MomentsReducer = (state = initialState, action) => {
  // console.log('payload', action);

  switch (action.type) {
    case ActionTypes.FETCH_MOMENTS:
      console.log(
        'in fetch moments, action.payload', action.payload,
      );
      return { ...state, allMoments: action.payload };
    case ActionTypes.FETCH_MOMENT:
      return { ...state, currentMoment: action.payload };
    case ActionTypes.CREATE_MOMENT:
      console.log('allmoments', state.allMoments, action.payload);
      return { ...state, allMoments: [...state.allMoments, action.payload] };
    case ActionTypes.MOMENTS_CLEAR:
      console.log('bitch we made it ');
      return { ...state, allMoments: [] };
    case ActionTypes.MOMENT_CLEAR:
      return { ...state, currentMoment: {} };
    default:
      return state;
  }
};

export default MomentsReducer;
