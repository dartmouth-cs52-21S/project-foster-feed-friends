import { ActionTypes, ROOT_URL } from './index';

const axios = require('axios').default;

export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

export function fetchOrgs() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/networks/resources`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_ORGS, payload: response.data });
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
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function fetchAll() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/networks/all`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_ORGS, payload: response.data.orgs });
      dispatch({ type: ActionTypes.FETCH_MENTORS, payload: response.data.mentors });
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function fetchOrg(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/org/profile/${id}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_ORG, payload: response.data });

      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function fetchMentor(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/mentor/profile/${id}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_MENTOR, payload: response.data });
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
export function mentorClear() {
  return (dispatch) => { (dispatch({ type: ActionTypes.MENTOR_CLEAR })); };
}

export function updateYouthMessaged(id, messaged) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/${id}/mentor`, { messaged }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
    }).catch((error) => {
    });
  };
}
