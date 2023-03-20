import {
  DELETE_USER_EVENT_LIST_FAILED,
  DELETE_USER_EVENT_LIST_LOADING,
  DELETE_USER_EVENT_LIST_SUCCESS,
} from "../actionType/actionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const deleteEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_EVENT_LIST_LOADING:
      return {
        ...state,
        loading: true,
        user: "",
        error: "",
      };
    case DELETE_USER_EVENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };

    case DELETE_USER_EVENT_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default deleteEventReducer;
