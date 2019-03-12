export const updateName = (name) => ({
  type: 'SET_NAME_FILTER',
  name,
  pushToUrl: {
    name
  }
});

export const updateGender = (gender) => ({
  type: 'SET_GENDER_FILTER',
  gender,
  pushToUrl: {
    gender
  }
});

export const updateAge = (age) =>({
  type: 'SET_AGE_FILTER',
  age,
  pushToUrl: {
    minAge: age.min,
    maxAge: age.max
  }
});