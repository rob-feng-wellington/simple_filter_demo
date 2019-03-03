import { combineReducers } from 'redux';
import peopleList from './peopleList';
import nameFilter from './nameFilter';
import ageFilter from './ageFilter';
import genderFilter from './genderFilter';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  peopleList,
  nameFilter,
  ageFilter,
  genderFilter
});
