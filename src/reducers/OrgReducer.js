import { ActionTypes } from '../actions';

const initialState = {
  allOrgs: [],
  currentOrg: {},
};

const OrgReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ORGS:
      return { ...state, allOrgs: action.payload };
    case ActionTypes.FETCH_ORG:
      return { ...state, currentOrg: action.payload };
    default:
      return state;
  }
};

export default OrgReducer;
