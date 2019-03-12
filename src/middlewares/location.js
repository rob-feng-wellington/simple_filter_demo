import { LOCATION_CHANGE } from 'connected-react-router';

const locationMiddleware = store => next => action => {
  if (action.type === LOCATION_CHANGE) {
    const { router } = store.getState();
    return next({
      ...action,
      payload: {
        ...action.payload,
        router
      },
    });
  }
  
  return next(action);
};

export default locationMiddleware;