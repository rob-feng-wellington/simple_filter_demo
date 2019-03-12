import { genderFilterTypes } from '../constants';
import { LOCATION_CHANGE } from 'connected-react-router';
import { getValueFromUrl } from '../utils/utils';

const genderFilter = (state = genderFilterTypes.ALL, action ) => {
  switch (action.type) {
  case 'SET_GENDER_FILTER':
    return action.gender;
  case LOCATION_CHANGE:
    // eslint-disable-next-line
    const value = getValueFromUrl(action.payload.location.search, 'gender');
    return value || state;
  default:
    return state;
  }
};

export default genderFilter;