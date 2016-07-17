import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers/index';

const createStoreWithMiddleware = compose(
									applyMiddleware( ReduxPromise ), 
									window.devToolsExtension && window.devToolsExtension()
								)( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
