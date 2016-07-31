export const GET_HINT = 'GET_HINT';
export const MAX_HINT = 4;

export function getHint( hints ) {
	return {
		type: GET_HINT,
		payload: --hints
	}
}