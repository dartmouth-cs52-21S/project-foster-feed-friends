import { ActionTypes } from '../actions';

const initialState = {
  allResources: [],
  currentResource: {},
};

const ResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_RESOURCES:
      return { ...state, allOrgs: action.payload };
    case ActionTypes.FETCH_RESOURCE:
      return { ...state, currentOrg: action.payload };
    default:
      return state;
  }
};

export default ResourceReducer;
