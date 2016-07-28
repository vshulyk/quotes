import { ANSWER_CHANGE } from '../actions/answer_change_action';

export default function( state = '', action ) {

  switch( action.type ) {
    case ANSWER_CHANGE:
      return action.payload;
  };

  return state;
}
