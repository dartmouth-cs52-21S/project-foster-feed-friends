// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import AuthReducer from './auth-reducer';
import ErrorReducer from './error-reducer';
import userReducer from './user-reducer';
import OrgReducer from './OrgReducer';
import MomentsReducer from './moments-reducer';
import EventReducer from './event-reducer';
import ResourceReducer from './resource-reducer';
import mentorReducer from './mentor-reducer';
import MessagedReducer from './messaged-reducer';

const rootReducer = combineReducers({
  errors: ErrorReducer,
  auth: AuthReducer,
  user: userReducer,
  moments: MomentsReducer,
  network: OrgReducer,
  events: EventReducer,
  resources: ResourceReducer,
  networkMentors: mentorReducer,
  messagedMentor: MessagedReducer,

});

export default rootReducer;
