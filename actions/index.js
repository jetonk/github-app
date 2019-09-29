import {
  START_FETCHING,
  FETCH_USER_DATA,
  SET_USER_DATA,
  FETCH_USER_DATA_FAILED,
} from 'app/constants';
import getUserQuery from 'app/api/getUser';

const startFetching = () => {
  return { type: START_FETCHING };
};
const fetchUserDataFailed = error => {
  return { type: FETCH_USER_DATA_FAILED, payload: error };
};
const setUserData = data => {
  return { type: SET_USER_DATA, payload: data };
};

export const fetchUserData = payload => {
  return async dispatch => {
    try {
      dispatch(startFetching());
      const result = await getUserQuery(payload);
      dispatch(setUserData(result));
    } catch (error) {
      dispatch(fetchUserDataFailed(error));
    }
  };
};
