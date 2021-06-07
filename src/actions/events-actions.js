import { ActionTypes, ROOT_URL } from './index';

const axios = require('axios').default;

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function createEvent({
  name, date, time, coordinator, location,
}, id, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/org/profile/${id}/event`, {
      name,
      date,
      time,
      coordinator,
      location,
    }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.EVENT_CREATE });
      history.push(`/org/profile/${id}`);
    }).catch((error) => {
      dispatch(authError(`Event Creation Failed: ${error.response.data}`));
    });
  };
}
export function fetchOrgEvents(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/org/${id}/events`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data });
    }).catch((error) => {
      dispatch(authError(`Org events fetch Failed: ${error.response.data}`));
    });
  };
}

export function fetchYouthEvents(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/youth/${id}/events`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data });
    }).catch((error) => {
      dispatch(authError(`Youth events fetch Failed: ${error.response.data}`));
    });
  };
}

export function fetchSpecificEvent(id, eventID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/org/${id}/event/${eventID}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_EVENT, payload: response.data });
    }).catch((error) => {
      dispatch(authError(`Fetch Speific Event Failed: ${error.response.data}`));
    });
  };
}
export function updateYouthEvent(id, eventID, events, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/org/${id}/event/${eventID}/add`, { events }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      history.push(`/youth/profile/${id}`);
    }).catch((error) => {
    });
  };
}

export function deleteEvent(id, eventID, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/org/${id}/event/${eventID}/delete`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      history.push(`/mentor/profile/${id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
