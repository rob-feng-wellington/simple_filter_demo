import { genderFilterTypes } from '../constants';

const genderFilter = (state = genderFilterTypes.ALL, action ) => {
  switch (action.type) {
  case 'SET_GENDER_FILTER':
    return action.gender;
  default:
    return state;
  }
};

export default genderFilter;