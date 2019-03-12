import React from 'react';
import PropTypes from 'prop-types';

import { MIN_AGE_DEFAULT, MAX_AGE_DEFAULT, genderFilterTypes } from '../constants';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filters = ({ name, gender, age, onChangeName, onChangeGender, onChangeAge }) => 
  <div>
    <div>
      <label htmlFor="inputName">Name: </label>
      <input 
        type="text" 
        id="inputName" 
        value={name} 
        onChange={(e) => {onChangeName(e.target.value);}}/>
    </div>
    <div>
      <label htmlFor="inputGender">Gender: </label>
      <select id="inputGender" value={gender} onChange={(e) => {onChangeGender(e.target.value);}}>
        {
          Object.keys(genderFilterTypes).map(key => {
            const value = genderFilterTypes[key];
            return <option key={value} value={value}>{value}</option>;
          })
        }
      </select>
    </div>
    <div style={{
      display: 'flex',
      padding: '0 15px',
      margin: '0 0 20px',
    }}>
      <label htmlFor="rangeAge">Age:</label>
      <div
        id="rangeAge"
        style={{ 
          display: 'flex', 
          flex: '1', 
          alignItems: 'center' }}>
        <div style={{ 
          flex: '1', 
          padding: '0 15px' }}>
          {age.min}
        </div>
        <Range
          min={MIN_AGE_DEFAULT}
          max={MAX_AGE_DEFAULT}
          defaultValue={[age.min, age.max]}
          value={[age.min, age.max]}
          onChange={onChangeAge}
        />
        <div style={{ 
          flex: '1', 
          padding: '0 15px' 
        }}>
          {age.max}
        </div>
      </div>
    </div>
  </div>;

Filters.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeGender: PropTypes.func.isRequired,
  onChangeAge: PropTypes.func.isRequired
};

export default Filters;