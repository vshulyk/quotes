import axios from 'axios';

const API_KEY = 'kFQTyjnBjymsh5mvG3bQL2Jx1mFIp1MSZbbjsnqwXWMRiyps1q';
const ROOT_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/';

export const NEXT_QUOTE = 'NEXT_QUOTE';

axios.defaults.headers['X-Mashape-Authorization'] = API_KEY	;

export function nextQuote() {
	let url = ROOT_URL + '?cat=movies',
		request = axios.get(url);

	return {
		type: NEXT_QUOTE,
		payload: request
	}
}