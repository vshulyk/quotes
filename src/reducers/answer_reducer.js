import { ANSWER_CHANGE } from '../actions/answer_change_action';
import { MARK_SOLVED } from '../actions/mark_solved_action';

export default function( state = '', action ) {

  switch( action.type ) {
    case ANSWER_CHANGE:
      return action.payload;
    case MARK_SOLVED:
      return "";  
  };

  return state;
}
