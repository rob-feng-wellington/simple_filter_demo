import { MIN_AGE_DEFAULT, MAX_AGE_DEFAULT } from '../constants';
import { LOCATION_CHANGE } from 'connected-react-router';
import { getValueFromUrl } from '../utils/utils';


const initialState = {
  min: MIN_AGE_DEFAULT,
  max: MAX_AGE_DEFAULT
};

const ageFilter = (state = initialState, action ) => {
  switch (action.type) {
  case 'SET_AGE_FILTER':
    return action.age;
  case LOCATION_CHANGE:
    // eslint-disable-next-line
    const min = getValueFromUrl(action.payload.location.search, 'minAge');
    // eslint-disable-next-line
    const max = getValueFromUrl(action.payload.location.search, 'maxAge');
    return min && max ? { min: parseInt(min), max: parseInt(max) } : state;
  default:
    return state;
  }
};

export default ageFilter;