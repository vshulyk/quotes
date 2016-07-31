export const GET_HINT = 'GET_HINT';

export function getHint( hints ) {
	return {
		type: GET_HINT,
		payload: --hints
	}
}