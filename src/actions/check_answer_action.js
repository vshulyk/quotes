export const CHECK_ANSWER = 'CHECK_ANSWER';

export function checkAnswer( quote, answer ) {
	return {
		type: CHECK_ANSWER,
		payload: quote.data.author == answer ?'You are right!!!' :'Nope. Try again?'
	}
}