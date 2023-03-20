import {
  LOGIN_AUTH_FAILED,
  LOGIN_AUTH_LOADING,
  LOGIN_AUTH_SUCCESS,
} from "../actionType/actionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH_LOADING:
      return {
        ...state,
        loading: true,
        user: "",
        error: "",
      };
    case LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case LOGIN_AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
