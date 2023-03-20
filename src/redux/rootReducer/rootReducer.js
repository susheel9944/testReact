import { combineReducers } from "redux";
import registrationReducer from "../reducer/authReducer";
import deleteEventReducer from "../reducer/deleteEventReducer";
import getListEventReducer from "../reducer/eventListReducer";
import eventReducer from "../reducer/eventReducer";
import getRegistrationReducer from "../reducer/getRegistrationData";
import loginReducer from "../reducer/loginReducer";
import editListReducer from "../reducer/editListReducer";
import updateEventListReducer from "../reducer/updateEventListReducer";

const rootReducer = combineReducers({
  registration: registrationReducer,
  getRegData: getRegistrationReducer,
  loginAuth: loginReducer,
  eventReg: eventReducer,
  listevent: getListEventReducer,
  deleteListEvent: deleteEventReducer,
  editEventList: editListReducer,
  updateEvent: updateEventListReducer,
});

export default rootReducer;
