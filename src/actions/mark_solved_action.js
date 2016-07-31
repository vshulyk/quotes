export const MARK_SOLVED = 'MARK_SOLVED';

export function markSolved( result ) {
	return {
		type: MARK_SOLVED,
		payload: result
	}
}