export const GET_HINT = 'GET_HINT';

export function getHint( hints ) {
	// console.log('HINT?', hints);
	return {
		type: GET_HINT,
		payload: --hints
	}
}