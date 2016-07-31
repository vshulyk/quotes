import { combineReducers } from 'redux';
import getQuoteState from './quotes_reducer';
import getInputState from './answer_reducer';
import getStatus from './status_reducer';

const rootReducer = combineReducers({
  quotes: getQuoteState,
  roundStatus: getStatus,
  currentAnswer: getInputState
});
export default rootReducer;
