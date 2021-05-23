// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  ERROR_SET: 'ERROR_SET',
  ERROR_CLEAR: 'ERROR_CLEAR',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  USER_INFO: 'USER_INFO',
};

const ROOT_URL = 'https://foster-project.herokuapp.com/api';
const API_KEY = '?key=fosterfeedfriends';
const axios = require('axios').default;

// to clear error after dispatching and handling it
export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

// get all posts
export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

// get a post by id
export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

// create a post
export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      // clear prev error
      errorClear()(dispatch);
      // redirect it to main page
      history.push('/');
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

// update one post
export function updatePost(post, history) {
  console.log('update');
  console.log(history);
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
      // redirect to main page
      history.push(`/posts/${post.id}`);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}

// delete post by id
export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then(() => {
      // clear prev error
      errorClear()(dispatch);
      // redirect to main page
      history.push('/');
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
      history.push('/signin');
    });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/youth/${API_KEY}`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signinOrg({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/org/${API_KEY}`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser({ email, password, userName }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/${API_KEY}`, { email, password, userName }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Sign up Failed: ${error.response.data}`));
    });
  };
}

export function signupOrg({
  orgname, location, pocname, email, password,
}, history) {
// takes in an object with email and password (minimal user object)
// returns a thunk method that takes dispatch as an argument (just like our create post method really)
// does an axios.post on the /signup endpoint (only difference from above)
// on success does:
//  dispatch({ type: ActionTypes.AUTH_USER });
//  localStorage.setItem('token', response.data.token);
// on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    console.log('inside action singup');
    axios.post(`${ROOT_URL}/signup/org/${API_KEY}`, {
      orgname,
      location,
      pocname,
      email,
      password,
    }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push(`/org/profile/${response.data.ID}`);
    }).catch((error) => {
      console.log('catch');
      dispatch(authError(`Sign up Failed: ${error.response.data}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    // history.push('/');
  };
}

// get all posts
export function renderUserInfo(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/org/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log(`hi from renderinfo ${id}`);
      dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
      // clear prev error
      errorClear()(dispatch);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
