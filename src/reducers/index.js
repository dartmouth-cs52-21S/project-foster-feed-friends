// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import AuthReducer from './auth-reducer';
import ErrorReducer from './error-reducer';
import userReducer from './user-reducer';
import OrgReducer from './OrgReducer';
import MomentsReducer from './moments-reducer';
import EventReducer from './event-reducer';
import ResourceReducer from './resource-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  errors: ErrorReducer,
  auth: AuthReducer,
  user: userReducer,
  moments: MomentsReducer,
  network: OrgReducer,
  events: EventReducer,
  resources: ResourceReducer,

});

export default rootReducer;
