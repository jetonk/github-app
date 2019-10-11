import {
  SEARCH,
  START_FETCHING,
  SET_SEARCH_DATA,
  FETCH_SEARCH_DATA_FAILED,
  CLEAR,
  SET_USER_DATA,
} from 'app/constants';
import searchUserQuery from 'app/api/searchUser';

export const searchUser = keyword => {
  return { type: SEARCH, payload: keyword };
};

const startFetching = () => {
  return { type: START_FETCHING };
};
const fetchSearchDataFailed = error => {
  return { type: FETCH_SEARCH_DATA_FAILED, payload: error };
};
const setSearchData = data => {
  return { type: SET_SEARCH_DATA, payload: data };
};

export const fetchSearchData = payload => {
  return async dispatch => {
    try {
      dispatch(startFetching());
      const results = await searchUserQuery(payload);
      dispatch(setSearchData(results.data.search));
    } catch (error) {
      dispatch(fetchSearchDataFailed(error));
    }
  };
};

export const clear = () => {
  return { type: CLEAR };
};

export const setUserData = data => {
  return { type: SET_USER_DATA, payload: data };
};
