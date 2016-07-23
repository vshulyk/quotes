import { CHECK_ANSWER } from '../actions/check_answer_action.js';

export default function getStatus(state='', action) {

	switch( action.type ) {
		case CHECK_ANSWER:
			return action.payload;
	};

	return state; 
}