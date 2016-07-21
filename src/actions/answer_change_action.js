export const ANSWER_CHANGE = 'ANSWER_CHANGE';

export function answerChange( _, text ) {
    return {
        type: ANSWER_CHANGE,
        payload: text || _.target.value
    }
}
