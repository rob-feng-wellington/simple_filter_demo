import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import FiltersContainer from './containers/filtersContainer';
import PeopleListContainer from './containers/peopleListContainer';

const Home = () => (
  <div>
    <FiltersContainer />
    <hr />
    <PeopleListContainer />
  </div>
);

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
};
  
App.propTypes = {
  history: PropTypes.object,
};

export default App;
