import { MIN_AGE_DEFAULT, MAX_AGE_DEFAULT } from '../constants';

const initialState = {
  min: MIN_AGE_DEFAULT,
  max: MAX_AGE_DEFAULT
};

const ageFilter = (state = initialState, action ) => {
  switch (action.type) {
  case 'SET_AGE_FILTER':
    return action.age;
  default:
    return state;
  }
};

export default ageFilter;