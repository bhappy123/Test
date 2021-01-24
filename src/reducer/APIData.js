const initialState = {
  loading: false,
  users: [],
  error: null,
  page: 1,
};

const APIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        loading: false,
        users: action.payload,
        error: '',
        page: state.page + 1,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        loading: false,
        users: [],
        error: action.payload,
        page: 1,
      };
    default:
      return state;
  }
};

export default APIReducer;
