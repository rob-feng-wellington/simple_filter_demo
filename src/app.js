import React from 'react';
import FiltersContainer from './containers/filtersContainer';
import PeopleListContainer from './containers/peopleListContainer';

const App = () => 
  <div>
    <FiltersContainer />
    <hr />
    <PeopleListContainer />
  </div>;


export default App;