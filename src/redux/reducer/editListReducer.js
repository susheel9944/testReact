import {
  EDIT_LIST_EVENT_FALIED,
  EDIT_LIST_EVENT_LOADING,
  EDIT_LIST_EVENT_SUCCESS,
  SINGLE_LIST_EVENT_FALIED,
  SINGLE_LIST_EVENT_LOADING,
  SINGLE_LIST_EVENT_SUCCESS,
} from "../actionType/actionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const editListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_LIST_EVENT_LOADING:
      return {
        ...state,
        loading: true,
        user: "",
        error: "",
      };
    case SINGLE_LIST_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };

    case SINGLE_LIST_EVENT_FALIED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default editListReducer;
