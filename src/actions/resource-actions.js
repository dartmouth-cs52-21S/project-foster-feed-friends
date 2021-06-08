import { ActionTypes, ROOT_URL } from './index';

const axios = require('axios').default;

export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

export function createResource(fields) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/submitResource`, fields).then((response) => {
      dispatch({ type: ActionTypes.CREATE_RESOURCE });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
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
