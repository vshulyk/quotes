export const ANSWER_CHANGE = 'ANSWER_CHANGE';

export function onAnswerChange( evt ) {
    return {
        type: ANSWER_CHANGE,
        payload: evt.target.value
    }
}
