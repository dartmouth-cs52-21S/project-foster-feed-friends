// import { ROOT_URL } from './index';

export const ActionTypes = {
  FETCH_ORGS: 'FETCH_ORGS',
  FETCH_ORG: 'FETCH_ORG',
  FETCH_MENTORS: 'FETCH_MENTORS',
  FETCH_ALL: 'FETCH_ALL',
  ERROR_SET: 'ERROR_SET',
  ERROR_CLEAR: 'ERROR_CLEAR',
};

const ROOT_URL = 'https://foster-project.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const API_KEY = '?key=fosterfeedfriends';
const axios = require('axios').default;

// to clear error after dispatching and handling it
export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

// get all posts
export function fetchOrgs() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/networks/resources`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_ORGS, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function fetchMentors() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/networks/mentors`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_MENTORS, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function fetchAll() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/networks/all`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_ALL, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

// get a post by id
export function fetchOrg(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/org/profile/${id}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_ORG, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
