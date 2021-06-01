// import { ROOT_URL } from './index';

// import API_KEY from './index';

export const ActionTypes = {
  EVENT_CREATE: 'EVENT_CREATE',
  AUTH_ERROR: 'AUTH_ERROR',
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
      history.push(`/org/profile/${id}`);
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Event Creation Failed: ${error.response}`));
    });
  };
}
