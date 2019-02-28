import { connect } from 'react-redux';
import PeopleList from '../components/peopleListComponent';
import { filteredPeopleList } from '../reducers/peopleList';

const mapStateToProps = (state) => ({
  list: filteredPeopleList(state)
});

const PeopleListContainer = connect(
  mapStateToProps
)(PeopleList);

export default PeopleListContainer;