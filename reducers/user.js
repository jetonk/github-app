import {
  START_FETCHING,
  FETCH_USER_DATA,
  SET_USER_DATA,
  FETCH_USER_DATA_FAILED,
} from 'app/constants';

const initialState = {
  user: {},
  loading: false,
  error: {
    status: false,
    message: '',
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload.data.user,
        loading: false,
        error: {
          status: false,
          messagE: '',
        },
      };
    case FETCH_USER_DATA_FAILED: {
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
    default:
      return state;
  }
}
export default userReducer;
