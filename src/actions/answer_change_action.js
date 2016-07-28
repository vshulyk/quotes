export const ANSWER_CHANGE = 'ANSWER_CHANGE';

export function answerChange( evt ) {
    return {
        type: ANSWER_CHANGE,
        payload: evt.target.value
    }
}
