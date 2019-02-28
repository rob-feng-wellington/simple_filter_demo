import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export default initialStore;