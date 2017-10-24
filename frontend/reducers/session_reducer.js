import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = Object.feeze({
  currentUser: null
});



const SessionReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const current_user = action.current_user;
      newState = merge({}, state, { currentUser });
      return newState;
      break;
    default:
      return state

  }
};

export default SessionReducer;
