import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

const initialStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );

  return store;
};

export default initialStore;