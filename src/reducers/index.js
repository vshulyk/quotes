import { combineReducers } from 'redux';
import getQuotes from './get_quotes_reducer';
import getAnswer from './get_answer_reducer';

const rootReducer = combineReducers({
  quotes: getQuotes,
  currentAnswer: getAnswer
});
export default rootReducer;
