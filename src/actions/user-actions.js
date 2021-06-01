// import { ROOT_URL } from './index';

export const ActionTypes = {
  USER_INFO: 'USER_INFO',
  USER_CLEAR: 'USER_CLEAR',
  ERROR_SET: 'ERROR_SET',
  ERROR_CLEAR: 'ERROR_CLEAR',
  UPDATE_USER: 'UPDATE_USER',
};

const ROOT_URL = 'https://foster-project.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const API_KEY = '?key=fosterfeedfriends';
const axios = require('axios').default;

export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

// get all posts
export function fetchOrgInfo(id) {
  return (dispatch) => {
    console.log({ id });
    console.log('token', localStorage.getItem('token'));
    axios.get(`${ROOT_URL}/org/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log({ response });
      localStorage.setItem('type', response.data.type);
      dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      console.log('this use');
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
export function fetchYouthInfo(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/youth/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log(`hi from renderinfo ${id}`);
      dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function fetchMentorInfo(id) {
  return (dispatch) => {
    console.log(id);
    axios.get(`${ROOT_URL}/mentor/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log(`hi from mentor ${id}`);
      console.log(response);
      dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
      console.log('response.data:', response.data);
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

// update mentor
export function updateMentor(mentor, history) {
  console.log('hello');
  return (dispatch) => {
    axios.put(`${ROOT_URL}/mentor/profile/${mentor.id}/edit`, mentor, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      console.log(response.data);
      // clear prev error
      errorClear()(dispatch);
      // redirect to main page
      history.push(`/mentor/profile/${mentor.id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function updateYouth(youth, history) {
  console.log('hello');
  return (dispatch) => {
    axios.put(`${ROOT_URL}/youth/profile/${youth.id}/edit`, youth, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      console.log(response.data);
      // clear prev error
      errorClear()(dispatch);
      // redirect to main page
      history.push(`/youth/profile/${youth.id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

export function updateOrg(org, history) {
  console.log('updated org: ', org);

  return (dispatch) => {
    axios.put(`${ROOT_URL}/org/profile/${org.id}/edit`, org, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      console.log('yikes', response.data);
      // clear prev error
      errorClear()(dispatch);
      // redirect to main page
      history.push(`/org/profile/${org.id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
