// import { ROOT_URL } from './index';

export const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  MOMENTS_CLEAR: 'MOMENTS_CLEAR',
  MOMENT_CLEAR: 'MOMENT_CLEAR',

};

const ROOT_URL = 'https://foster-project.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const API_KEY = '?key=fosterfeedfriends';
const axios = require('axios').default;

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinYouth({ email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/youth/`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push(`/youth/profile/${response.data.ID}`);
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signinMentor({ email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/mentor`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      // dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push(`/mentor/profile/${response.data.ID}`);
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function authUser(userId) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.AUTH_USER, payload: userId });
    // history.push(`/org/profile/${userId}`);
  };
}

export function signinOrg({ email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/org/`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data.ID });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.ID);
      history.push(`/org/profile/${response.data.ID}`);
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupYouth(fields, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/youth/`, fields).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      console.log(response.data.ID);
      history.push(`/youth/profile/${response.data.ID}`);
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Sign up Failed: ${error.response.data}`));
    });
  };
}

export function signupMentor(
  fields,
  history,
) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/mentor/`, fields).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      // dispatch({ type: ActionTypes.MOMENTS_CLEAR });
      localStorage.setItem('token', response.data.token);
      history.push(`/mentor/profile/${response.data.ID}`);
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Sign up Failed: ${error.response.data}`));
    });
  };
}
export function signupOrg(
  fields, history,
) {
  return (dispatch) => {
    console.log('inside action singup');
    axios.post(`${ROOT_URL}/signup/org/`,
      fields).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
      history.push(`/org/profile/${response.data.ID}`);
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Sign up Failed: ${error}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    dispatch({ type: ActionTypes.USER_CLEAR });
    history.push('/');
  };
}
