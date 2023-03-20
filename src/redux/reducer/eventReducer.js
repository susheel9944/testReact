import {
  REG_EVENT_FAILED,
  REG_EVENT_LOADING,
  REG_EVENT_SUCCESS,
} from "../actionType/actionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case REG_EVENT_LOADING:
      return {
        ...state,
        loading: true,
        user: "",
        error: "",
      };
    case REG_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case REG_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default eventReducer;
