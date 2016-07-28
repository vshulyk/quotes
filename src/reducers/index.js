import { combineReducers } from 'redux';
import getQuotes from './quotes_reducer';
import getAnswer from './answer_reducer';
import getStatus from './status_reducer';

const rootReducer = combineReducers({
  quotes: getQuotes,
  roundStatus: getStatus,
  currentAnswer: getAnswer
});
export default rootReducer;
