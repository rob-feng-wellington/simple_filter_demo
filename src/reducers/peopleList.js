import * as data from '../mockData/db.json';
import { genderFilterTypes } from '../constants';

const peopleList = (state = data.default) => {
  return state;
};

export const filteredPeopleList = ({ peopleList, nameFilter, ageFilter, genderFilter }) => {
  return peopleList.filter(
    p => p.name.toLowerCase().includes(nameFilter.toLowerCase()) 
  ).filter(
    p => p.age >= ageFilter.min && p.age <= ageFilter.max
  ).filter(
    p => p.gender === genderFilter || genderFilter === genderFilterTypes.ALL
  );
};

export default peopleList;