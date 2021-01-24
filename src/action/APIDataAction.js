import axios from 'axios';

export const fetchUsersRequest = () => {
  return {
    type: 'FETCH_USERS_REQUEST',
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error,
  };
};
export const getCurrentPage = () => {
  return {
    type: 'GET_CURRENT_PAGE',
  };
};

export const fetchUsers = () => {
  return (dispatch, getState) => {
    const reducerVal = getState().APIData;
    dispatch(fetchUsersRequest());
    axios
      .get(
        `https://dummyapi.io/data/api/user?page=${reducerVal.page}&limit=10`,
        {
          headers: {'app-id': '600d876c6f7ee671acb1b70b'},
        },
      )
      .then((res) => {
        const users = [...reducerVal.users, ...res.data.data];
        console.log('Reducer Value', reducerVal.page);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
