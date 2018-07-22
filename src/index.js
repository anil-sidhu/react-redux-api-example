import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducer'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

// const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
  