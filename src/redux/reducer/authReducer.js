import {
  POST_REGISTRATION_FAILED,
  POST_REGISTRATION_LOADING,
  POST_REGISTRATION_SUCCESS,
} from "../actionType/actionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTRATION_LOADING:
      return {
        ...state,
        loading: true,
        user: "",
        error: "",
      };
    case POST_REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case POST_REGISTRATION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default registrationReducer;
