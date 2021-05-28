import { ActionTypes } from '../actions/moments-action';

const initialState = {
  allMoments: [],
  currentMoment: {},
};

const MomentsReducer = (state = initialState, action) => {
  console.log('payload', action);

  switch (action.type) {
    case ActionTypes.FETCH_MOMENTS:
      return { ...state, allMoments: action.payload };
    case ActionTypes.FETCH_MOMENT:
      return { ...state, currentMoment: action.payload };
    case ActionTypes.CREATE_MOMENT:
      console.log('made it in the actiontypes');
      console.log('create payload', action.payload);
      return { ...state, allMoments: [...state.allMoments, action.payload] };
    default:
      return state;
  }
};

export default MomentsReducer;
