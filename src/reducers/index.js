import { combineReducers } from 'redux';
import peopleList from './peopleList';
import nameFilter from './nameFilter';
import ageFilter from './ageFilter';
import genderFilter from './genderFilter';

const rootReducer = combineReducers({
  peopleList,
  nameFilter,
  ageFilter,
  genderFilter
});

export default rootReducer;