export const ROOT_URL = 'https://foster-project.herokuapp.com/api';
// export const ROOT_URL = 'http://localhost:9090/api';
export const API_KEY = '?key=fosterfeedfriends';
const axios = require('axios').default;

export const ActionTypes = {
  FETCH_MESSAGED_MENTOR: 'FETCH_MESSAGED_MENTOR',
  AUTH_ERROR: 'AUTH_ERROR',

};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function fectchMessagedMentor(id) {
  return (dispatch) => {
    console.log('fetch events token:', localStorage.getItem('token'));
    axios.get(`${ROOT_URL}/youth/${id}/messaged`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_MESSAGED_MENTOR, payload: response.data });
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Event fetch Failed: ${error.response.data}`));
    });
  };
}
