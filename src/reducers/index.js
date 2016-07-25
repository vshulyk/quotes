import { combineReducers } from 'redux';
import getQuotes from './get_quotes_reducer';
import getAnswer from './get_answer_reducer';
import getStatus from './get_status_reducer';
import getHint from './get_hint_reducer';

const rootReducer = combineReducers({
  quotes: getQuotes,
  currentStatus: getStatus,
  currentAnswer: getAnswer,
  hints: getHint
});
export default rootReducer;
