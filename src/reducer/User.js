const userDetails = {
  name: 'Bikash',
  address: 'Kakatpur',
  location: 'Puri',
  profession: 'Developer',
  workExperience: '1.3',
};
const userReducer = (state = userDetails, action) => {
  switch (action.type) {
    case 'USERDETAILS':
      return state;
    default:
      return state;
  }
};

export default userReducer;
