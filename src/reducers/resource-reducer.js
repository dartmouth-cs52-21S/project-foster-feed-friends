import { ActionTypes } from '../actions';

const initialState = {
  allResources: [],
  currentResource: {},
};

const ResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_RESOURCE:
      return { ...state, resource: action.payload };
    case ActionTypes.FETCH_RESOURCES:
      return { ...state, allResources: action.payload };
    case ActionTypes.FETCH_RESOURCE:
      return { ...state, currentResources: action.payload };
    default:
      return state;
  }
};

export default ResourceReducer;
