import { GET_HINT } from '../actions/get_hint_action';

export default function( state = 0, action ) {

  switch( action.type ) {
      case GET_HINT:
          return action.payload;
  };

  return state;
}
