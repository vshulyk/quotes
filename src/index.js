import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = compose(
									applyMiddleware( ReduxPromise ), 
									window.devToolsExtension && window.devToolsExtension()
								)( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <MuiThemeProvider>
    	<App />
	  </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
