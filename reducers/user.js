import {
  SEARCH,
  START_FETCHING,
  SET_SEARCH_DATA,
  FETCH_SEARCH_DATA_FAILED,
  CLEAR,
  SET_USER_DATA,
} from 'app/constants';

const initialState = {
  search: '',
  users: [],
  user: {},
  loading: false,
  error: {
    status: false,
    message: '',
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case SET_SEARCH_DATA:
      return {
        ...state,
        users: action.payload.edges,
        loading: false,
        error: {
          status: false,
          message: '',
        },
      };
    case FETCH_SEARCH_DATA_FAILED: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: error.graphQLErrors.length > 0 ? error.graphQLErrors[0].message : error.message,
        },
      };
    }
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: {
          status: false,
          message: '',
        },
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}
export default userReducer;
