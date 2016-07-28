import { NEXT_QUOTE } from '../actions/next_quote_action';
import { GET_HINT } from '../actions/get_hint_action';
import { CHECK_ANSWER } from '../actions/check_answer_action.js';

let defaultState = {
	current: null,
	list: []
};

function singleQuoteChange(state, part) {
	var quote = Object.assign({}, state.current, part);

	return Object.assign({}, state, {
    current: quote,
    list: state.list
  });
}

export default function( state = defaultState, action ) {
	switch( action.type ) {

		case NEXT_QUOTE:
			const quote = {
				ts: (new Date()).getTime(),
				info: action.payload.data,
				isSolved: false,
				isTouched: false,
				hintsLeft: 4
			};
			return {
				current: quote,
				list: state.list
			}

		case GET_HINT:
			return singleQuoteChange(
				state,
				{ 
					hintsLeft: action.payload,
					isTouched: true 
				}
			);

    case CHECK_ANSWER:
    	return singleQuoteChange(
				state,
				{ 
					isSolved: action.payload,
					isTouched: true
				}
			);
	};

	return state;
}