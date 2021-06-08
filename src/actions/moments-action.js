import { ActionTypes } from './index';

export function errorClear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

export function fetchMoments() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_MOMENTS });
  };
}

export function fetchMoment(id) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_MOMENT, payload: id.data });
  };
}

export function createMoment(moment) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.CREATE_MOMENT, payload: moment });
  };
}

export function updateMoment(moment) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_MOMENT, payload: moment.data });
    errorClear()(dispatch);
  };
}

export function deleteMoment() {
  return (dispatch) => {
    errorClear()(dispatch);
  };
}
