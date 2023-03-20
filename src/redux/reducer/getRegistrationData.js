import {
  GET_REGISTRATION_DATA_FAILED,
  GET_REGISTRATION_DATA_SUCCESS,
  GET_REGISTRATION_LOADING,
} from "../actionType/actionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const getRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTRATION_LOADING:
      return {
        ...state,
        loading: true,
        user: "",
        error: "",
      };
    case GET_REGISTRATION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case GET_REGISTRATION_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getRegistrationReducer;
