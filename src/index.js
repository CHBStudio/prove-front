import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';

import history from 'utils/history';
// import store from 'store';

import Root from './Root';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
// let store = (IS_PRODUCTION || reduxDevTools) ?
//     createStore(reducers, compose(reduxDevTools())) :
//     createStore(reducers);

let store = null;





ReactDOM.render(
    <Provider store={ store }>
        <Router history={history}>
            <Root/>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
