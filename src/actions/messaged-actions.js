import { ActionTypes, ROOT_URL } from './index';

const axios = require('axios').default;

// eslint-disable-next-line import/prefer-default-export
export function fectchMessagedMentor(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/youth/${id}/messaged`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_MESSAGED_MENTOR, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, payload: error });
    });
  };
}
