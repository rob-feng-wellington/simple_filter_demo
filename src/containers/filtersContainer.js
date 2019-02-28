import { connect } from 'react-redux';
import Filters from '../components/filtersComponent';
import { updateName, updateGender, updateAge } from '../actions';

const mapStateToProps = (state) => ({
  name: state.nameFilter,
  gender: state.genderFilter,
  age: state.ageFilter
});

const mapDispatchToProps = (dispatch) => ({
  onChangeName(name){
    dispatch(updateName(name));
  },
  onChangeGender(gender){
    dispatch(updateGender(gender));
  },
  onChangeAge(age){
    const age_formated = {
      min: age[0],
      max: age[1]
    };
    dispatch(updateAge(age_formated));
  }
});

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;