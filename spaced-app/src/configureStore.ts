import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState = {}) {
  const loggerMiddleware = createLogger({});
  const middleware = [promiseMiddleware, thunkMiddleware];
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(loggerMiddleware);
  }

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
