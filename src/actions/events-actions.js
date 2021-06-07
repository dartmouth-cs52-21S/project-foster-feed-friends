// import { ROOT_URL } from './index';

// import API_KEY from './index';

export const ActionTypes = {
  EVENT_CREATE: 'EVENT_CREATE',
  FETCH_EVENTS: 'FETCH_EVENTS',
  FETCH_EVENT: 'FETCH_EVENT',
  AUTH_ERROR: 'AUTH_ERROR',
  UPDATE_USER: 'UPDATE_USER',
};

const ROOT_URL = 'https://foster-project.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const API_KEY = '?key=fosterfeedfriends';
const axios = require('axios').default;

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

// export function createEvent({
//   name, date, time, coordinator, location,
// }, id, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/org/profile/${id}/event`, {
//       name,
//       date,
//       time,
//       coordinator,
//       // description,
//       location,
//     }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       dispatch({ type: ActionTypes.EVENT_CREATE });
//       history.push(`/org/profile/${id}`);
//     }).catch((error) => {
//       console.log('catch');
//       dispatch(authError(`Event Creation Failed: ${error.response}`));
//     });
//   };
// }

export function createEvent({
  name, date, time, coordinator, location,
}, id, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/org/profile/${id}/event`, {
      name,
      date,
      time,
      coordinator,
      // description,
      location,
    }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.EVENT_CREATE });
      console.log(`${ROOT_URL}/org/${id}/events`);
      // axios.get(`${ROOT_URL}/org/${id}/events`).then((value) => {
      //   console.log('Events Data', value);
      //   dispatch({ type: ActionTypes.FETCH_EVENTS, payload: value.data });
      // });
      history.push(`/org/profile/${id}`);
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Event Creation Failed: ${error.response.data}`));
    });
  };
}
export function fetchOrgEvents(id) {
  return (dispatch) => {
    console.log('fetch events token:', localStorage.getItem('token'));
    axios.get(`${ROOT_URL}/org/${id}/events`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data });
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Event fetch Failed: ${error.response.data}`));
    });
  };
}

export function fetchYouthEvents(id) {
  return (dispatch) => {
    console.log('fetch events token:', localStorage.getItem('token'));
    axios.get(`${ROOT_URL}/youth/${id}/events`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data });
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Event fetch Failed: ${error.response.data}`));
    });
  };
}

export function fetchSpecificEvent(id, eventID) {
  console.log(localStorage.getItem('token'));
  console.log(id, eventID);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/org/${id}/event/${eventID}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_EVENT, payload: response.data });
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Event fetch Failed: ${error.response.data}`));
    });
  };
}
export function updateYouthEvent(id, eventID, events, history) {
  console.log(events);
  return (dispatch) => {
    axios.put(`${ROOT_URL}/org/${id}/event/${eventID}/add`, { events }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      // dispatch({ type: ActionTypes.ADD_EVENT, payload: response.data });
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      console.log('date form update', response.data);
      // clear prev error
      history.push(`/youth/profile/${id}`);
    }).catch((error) => {
      console.log('catch');
      console.log(error);
      // dispatch(authError(`Event update Failed: ${error.response.data}`));
    });
  };
}

export function deleteEvent(id, eventID, history) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/org/${id}/event/${eventID}/delete`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      history.push(`/mentor/profile/${id}`);
    }).catch((error) => {
      console.log(error);
    });
  };
}
