import { push } from 'connected-react-router';


export default store => next => action => {
  if (action.pushToUrl) {   
    const state = store.getState();
    const query = {
      ...state.router.location.state,
      ...action.pushToUrl
    };
    const queryString = Object.keys(query).map(key => key + '=' + query[key]).join('&');
    store.dispatch(push({
      search: queryString,
      state: query
    }));
  }

  return next(action);
};
