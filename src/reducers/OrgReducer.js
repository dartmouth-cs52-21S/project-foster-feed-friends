import { ActionTypes } from '../actions';
// all orgs and current org state initially
const initialState = {
  allOrgs: [],
  currentOrg: {},
};
// reducer for fetching orgs from org actions
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
