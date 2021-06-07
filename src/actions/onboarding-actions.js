import { ActionTypes, ROOT_URL } from './index';

const axios = require('axios').default;

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
      localStorage.setItem('userId', response.data.ID);
      localStorage.setItem('type', response.data.type);
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
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.ID);
      localStorage.setItem('type', response.data.type);
      history.push(`/mentor/profile/${response.data.ID}`);
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function authUser(userId) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.AUTH_USER, payload: userId });
  };
}

export function signinOrg({ email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/org/`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data.ID });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.ID);
      localStorage.setItem('type', response.data.type);
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
      localStorage.setItem('userId', response.data.ID);
      localStorage.setItem('type', response.data.type);
      history.push(`/youth/profile/${response.data.ID}`);
    }).catch((error) => {
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
      dispatch({ type: ActionTypes.MOMENTS_CLEAR });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.ID);
      localStorage.setItem('type', response.data.type);
      history.push(`/mentor/profile/${response.data.ID}`);
    }).catch((error) => {
      dispatch(authError(`Sign up Failed: ${error.response.data}`));
    });
  };
}
export function signupOrg(
  fields, history,
) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/org/`, fields).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.ID);
      localStorage.setItem('type', response.data.type);
      history.push(`/org/profile/${response.data.ID}`);
    }).catch((error) => {
      dispatch(authError(`Sign up Failed: ${error}`));
    });
  };
}

export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('type');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    dispatch({ type: ActionTypes.USER_CLEAR });
    history.push('/');
  };
}
