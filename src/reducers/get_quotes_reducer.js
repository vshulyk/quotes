import { NEXT_QUOTE } from '../actions/next_quote_action';

export default function( state = [], action ) {

	switch( action.type ) {
		case NEXT_QUOTE:
			const stateObject = {
				ts: (new Date()).getTime(),
				data: action.payload.data
			};
			return [stateObject, ...state];
	};

	return state;
}