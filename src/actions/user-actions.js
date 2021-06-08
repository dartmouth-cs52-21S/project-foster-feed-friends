import { ActionTypes, ROOT_URL } from './index';

const axios = require('axios').default;

export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

export function fetchOrgInfo(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/org/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      localStorage.setItem('type', response.data.type);
      dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
export function fetchYouthInfo(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/youth/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function fetchMentorInfo(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/mentor/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function updateMentor(mentor, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/mentor/profile/${mentor.id}/edit`, mentor, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      errorClear()(dispatch);
      history.push(`/mentor/profile/${mentor.id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function updateYouth(youth, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/youth/profile/${youth.id}/edit`, youth, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      errorClear()(dispatch);
      history.push(`/youth/profile/${youth.id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function updateOrg(org, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/org/profile/${org.id}/edit`, org, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      errorClear()(dispatch);
      history.push(`/org/profile/${org.id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function updateYouthPath(id, pathString, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/youth/${id}/path/edit`, { path: pathString }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      errorClear()(dispatch);
      history.push(`/youth/profile/${id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function updateMentorMoments(id, moments, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/mentor/${id}/path/edit`, { momentsPath: moments }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      dispatch({ type: ActionTypes.MOMENTS_CLEAR });
      dispatch({ type: ActionTypes.MOMENT_CLEAR });
      errorClear()(dispatch);
      history.push(`/mentor/profile/${id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
