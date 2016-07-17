import { combineReducers } from 'redux';
import getQuotes from './get_quotes_reducer';

const rootReducer = combineReducers({
  quotes: getQuotes
});
export default rootReducer;
