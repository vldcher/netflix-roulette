import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers";
import thunk from "redux-thunk";

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancers = global.window && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
    composeEnhancers = compose;
}

export default function configureStore(preloadedState = {}) {
    return createStore(reducers, preloadedState, composeEnhancers(
        applyMiddleware(thunk))
    )
};