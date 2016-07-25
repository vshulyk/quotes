export const GET_HINT = 'GET_HINT';

export function getHint(hint) {
	console.log('HINT?', hint);
	var nextHintValue = hint + 1;
	return {
		type: GET_HINT,
		payload: nextHintValue > 4 ? 0: nextHintValue
	}
}