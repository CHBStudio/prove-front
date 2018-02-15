import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// import store from 'store';

import Root from './Root';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
// let store = (IS_PRODUCTION || reduxDevTools) ?
//     createStore(reducers, compose(reduxDevTools())) :
//     createStore(reducers);

let store = null;





ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
