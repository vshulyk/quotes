import { NEXT_QUOTE } from '../actions/next_quote_action';
import { GET_HINT } from '../actions/get_hint_action';
import { MARK_SOLVED } from '../actions/mark_solved_action.js';

function currentQuoteReducer( state, action ) {
	state = state || Object.assign({}, state, { current: null });

	switch( action.type ) {

		case NEXT_QUOTE:
			return {
				ts: (new Date()).getTime(),
				info: action.payload.data,
				isFinished: false,
				isSolved: false,
				isTouched: false,
				hintsLeft: 4
			};

		case GET_HINT:
			return Object.assign(
				{},
				state.current, 
				{ 
					hintsLeft: action.payload 
				}
			);

		case MARK_SOLVED:
			return null;
	
	};

	return state.current;
}

function listReducer( state, action ) {
	state = state || Object.assign({}, state, { list: [] });
	
	switch( action.type ) {

		case MARK_SOLVED:
			state.current.isSolved = action.payload;
			state.current.isFinished = true;
			return [state.current, ...state.list];

	};

	return state.list;
}

export default function( state, action ) {
	return {
		current: currentQuoteReducer( state, action ),
		list: listReducer( state, action )
	};
}