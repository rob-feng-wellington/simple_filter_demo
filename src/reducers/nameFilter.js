import { LOCATION_CHANGE } from 'connected-react-router';
import { getValueFromUrl } from '../utils/utils';

const nameFilter = ( state='', action ) => {
  switch (action.type) {
  case 'SET_NAME_FILTER':
    return action.name;
  case LOCATION_CHANGE:
  // eslint-disable-next-line
    const value = getValueFromUrl(action.payload.location.search, 'name');
    return value || state;
  default:
    return state;
  }
};

export default nameFilter;