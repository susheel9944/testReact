import {
  UPDATE_LIST_EVENT_FIALED,
  UPDATE_LIST_EVENT_LOADING,
  UPDATE_LIST_EVENT_SUCCESS,
} from "../actionType/actionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const updateEventListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST_EVENT_LOADING:
      return {
        ...state,
        loading: true,
        user: "",
        error: "",
      };
    case UPDATE_LIST_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };

    case UPDATE_LIST_EVENT_FIALED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default updateEventListReducer;
