const ROOT_URL = 'https://foster-project.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const API_KEY = '?key=fosterfeedfriends';
const axios = require('axios').default;

export const ActionTypes = {
  CREATE_RESOURCE: 'CREATE_RESOURC',
  FETCH_RESOURCES: 'FETCH_RESOURCES',
  FETCH_RESOURCE: 'FETCH_RESOURCE',
  CLEAR_RESOURCE: 'CLEAR_RESOURCE',
  ERROR_SET: 'ERROR_SET',
  ERROR_CLEAR: 'ERROR_CLEAR',

};

export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

export function createResource(fields, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/submitResource`, fields).then((response) => {
      dispatch({ type: ActionTypes.CREATE_RESOURCE });
      history.push('/');
    }).catch((error) => {
      console.log('catch resource: ', error);
    });
  };
}

export function fetchResources() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/resources`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_RESOURCES, payload: response.data });
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

// get a post by id
export function fetchResource(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/resources/${id}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_RESOURCE, payload: response.data });
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
