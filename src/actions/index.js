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
  USER_CLEAR: 'USER_CLEAR',
  UPDATE_USER: 'UPDATE_USER',
  EVENT_CREATE: 'EVENT_CREATE',
};

const ROOT_URL = 'https://foster-project.herokuapp.com/api';
// const ROOT_URL = 'https://localhost:9090/api';
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
// export function authError(error) {
//   return {
//     type: ActionTypes.AUTH_ERROR,
//     message: error,
//   };
// }

// export function signinYouth({ email, password }, history) {
//   // takes in an object with email and password (minimal user object)
//   // returns a thunk method that takes dispatch as an argument (just like our create post method really)
//   // does an axios.post on the /signin endpoint
//   // on success does:
//   //  dispatch({ type: ActionTypes.AUTH_USER });
//   //  localStorage.setItem('token', response.data.token);
//   // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/signin/youth/${API_KEY}`, { email, password }).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_USER });
//       localStorage.setItem('token', response.data.token);
//       history.push(`/youth/profile/${response.data.ID}`);
//     }).catch((error) => {
//       dispatch(authError(`Sign In Failed: ${error.response.data}`));
//     });
//   };
// }

// export function signinMentor({ email, password }, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/signin/mentor`, { email, password }).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_USER });
//       dispatch({ type: ActionTypes.AUTH_USER });
//       localStorage.setItem('token', response.data.token);
//       history.push(`/mentor/profile/${response.data.ID}`);
//     }).catch((error) => {
//       dispatch(authError(`Sign In Failed: ${error.response.data}`));
//     });
//   };
// }

// export function authUser(userId) {
//   return (dispatch) => {
//     dispatch({ type: ActionTypes.AUTH_USER, payload: userId });
//     // history.push(`/org/profile/${userId}`);
//   };
// }

// export function signinOrg({ email, password }, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/signin/org/${API_KEY}`, { email, password }).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_USER, payload: response.data.ID });
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userId', response.data.ID);
//       history.push(`/org/profile/${response.data.ID}`);
//     }).catch((error) => {
//       dispatch(authError(`Sign In Failed: ${error.response.data}`));
//     });
//   };
// }

// export function signupYouth({
//   email, password, firstName, lastName, age, hometown,
// }, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/signup/youth/${API_KEY}`, {
//       email, password, firstName, lastName, age, hometown,
//     }).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_USER });
//       localStorage.setItem('token', response.data.token);
//       console.log(response.data.ID);
//       history.push(`/youth/profile/${response.data.ID}`);
//     }).catch((error) => {
//       console.log('catch');
//       dispatch(authError(`Sign up Failed: ${error.response.data}`));
//     });
//   };
// }

// export function signupMentor({
//   email, password, firstName, lastName, foster, organization, careerPath,
// }, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/signup/mentor/${API_KEY}`, {
//       email, password, firstName, lastName, foster, organization, careerPath,
//     }).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_USER });
//       localStorage.setItem('token', response.data.token);
//       history.push(`/mentor/profile/${response.data.ID}`);
//     }).catch((error) => {
//       console.log('catch');
//       dispatch(authError(`Sign up Failed: ${error.response.data}`));
//     });
//   };
// }
// export function signupOrg({
//   orgname, location, pocname, email, password,
// }, history) {
//   return (dispatch) => {
//     console.log('inside action singup');
//     axios.post(`${ROOT_URL}/signup/org/${API_KEY}`, {
//       orgname,
//       location,
//       pocname,
//       email,
//       password,
//     }).then((response) => {
//       dispatch({ type: ActionTypes.AUTH_USER });
//       localStorage.setItem('token', response.data.token);
//       console.log(response.data);
//       history.push(`/org/profile/${response.data.ID}`);
//     }).catch((error) => {
//       console.log('catch');
//       dispatch(authError(`Sign up Failed: ${error.response.data}`));
//     });
//   };
// }

// // deletes token from localstorage
// // and deauths
// export function signoutUser(history) {
//   return (dispatch) => {
//     localStorage.removeItem('token');
//     dispatch({ type: ActionTypes.DEAUTH_USER });
//     dispatch({ type: ActionTypes.USER_CLEAR });
//     history.push('/');
//   };
// }

// get all posts
// export function renderOrgInfo(id) {
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/org/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       console.log(`hi from renderinfo ${id}`);
//       dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
//       // clear prev error
//       errorClear()(dispatch);
//     }).catch((error) => {
//       console.log('this use');
//       dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//     });
//   };
// }
// export function renderYouthInfo(id) {
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/youth/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       console.log(`hi from renderinfo ${id}`);
//       dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
//       // clear prev error
//       errorClear()(dispatch);
//     }).catch((error) => {
//       dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//     });
//   };
// }

// export function renderMentorInfo(id) {
//   return (dispatch) => {
//     console.log(id);
//     axios.get(`${ROOT_URL}/mentor/profile/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       console.log(`hi from mentor ${id}`);
//       console.log(response);
//       dispatch({ type: ActionTypes.USER_INFO, payload: response.data });
//       console.log('response.data:', response.data);
//       errorClear()(dispatch);
//     }).catch((error) => {
//       dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//     });
//   };
// }

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
//       localStorage.setItem('token', response.data.token);
//       history.push(`/org/profile/${localStorage.getItem('userId')}`);
//     }).catch((error) => {
//       console.log('catch');
//       dispatch(authError(`Event Creation Failed: ${error.response.data}`));
//     });
//   };
// }

// // update mentor
// export function updateMentor(mentor, history) {
//   console.log('hello');
//   return (dispatch) => {
//     axios.put(`${ROOT_URL}/mentor/profile/${mentor.id}/edit`, mentor, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
//       console.log(response.data);
//       // clear prev error
//       errorClear()(dispatch);
//       // redirect to main page
//       history.push(`/mentor/profile/${mentor.id}`);
//     }).catch((error) => {
//       dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//     });
//   };
// }

// export function updateYouth(youth, history) {
//   console.log('hello');
//   return (dispatch) => {
//     axios.put(`${ROOT_URL}/youth/profile/${youth.id}/edit`, youth, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
//       console.log(response.data);
//       // clear prev error
//       errorClear()(dispatch);
//       // redirect to main page
//       history.push(`/youth/profile/${youth.id}`);
//     }).catch((error) => {
//       dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//     });
//   };
// }

// export function updateOrg(org, history) {
//   console.log('hello');
//   return (dispatch) => {
//     axios.put(`${ROOT_URL}/org/profile/${org.id}/edit`, org, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
//       console.log(response.data);
//       // clear prev error
//       errorClear()(dispatch);
//       // redirect to main page
//       history.push(`/org/profile/${org.id}`);
//     }).catch((error) => {
//       dispatch({ type: ActionTypes.ERROR_SET, payload: error });
//     });
//   };
// }
