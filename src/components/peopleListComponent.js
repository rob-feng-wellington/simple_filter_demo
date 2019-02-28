import React from 'react';
import PropTypes from 'prop-types';

const PeopleList = ({ list }) => {
  return (
    list.length > 0 ?
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(p => 
              <tr key={p._id}>
                <th scope="row">{p.name}</th>
                <td>{p.age}</td>
                <td>{p.gender}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      :
      <h4>Please redefine your filter</h4>
  );
};

PeopleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['male', 'female']).isRequired
  })).isRequired
};

export default PeopleList;