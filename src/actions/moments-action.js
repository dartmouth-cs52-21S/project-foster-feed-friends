export const ActionTypes = {
  FETCH_MOMENTS: 'FETCH_MOMENTS',
  FETCH_MOMENT: 'FETCH_MOMENT',
  //   UPDATE_MOMENT: 'UPDATE_MOMENT',
  CREATE_MOMENT: 'CREATE_MOMENT',
  //   DELETE_MOMENT: 'DELETE_MOMENT',
  ERROR_CLEAR: 'ERROR_CLEAR',
};

export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

// get all posts
export function fetchMoments() {
  return (dispatch) => {
    // axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
    dispatch({ type: ActionTypes.FETCH_MOMENTS });
    // clear prev error
    // errorClear()(dispatch);
  };
}

// get a post by id
export function fetchMoment(id) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_MOMENT, payload: id.data });
    // clear prev error
    // errorClear()(dispatch);
  };
}

// create a post
export function createMoment(moment) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.CREATE_MOMENT, payload: moment });
    // clear prev error
    // errorClear()(dispatch);
  };
}

// update one post
export function updateMoment(moment) {
//   console.log('update');
//   console.log(history);
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_MOMENT, payload: moment.data });
    // clear prev error
    errorClear()(dispatch);
    // redirect to main page
  };
}

// delete post by id
export function deleteMoment() {
  return (dispatch) => {
    // clear prev error
    errorClear()(dispatch);
    // redirect to main page
  };
}
