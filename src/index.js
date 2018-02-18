import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';
import 'babel-polyfill';

import history from 'utils/history';
import storeScheme from 'store';

import Root from './Root';


let store = null;

if (false) {
  const middleware = applyMiddleware(...storeScheme.sagas);
  store = createStore(
    storeScheme.reducers,
    middleware
  );
} else {
  const middleware = applyMiddleware(...storeScheme.sagas);

  let enhancer;

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    enhancer = compose(middleware);
  }

  store = createStore(
    storeScheme.reducers,
    enhancer
  );
}


ReactDOM.render(
    <Provider store={ store }>
        <Router history={history}>
            <Root/>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
