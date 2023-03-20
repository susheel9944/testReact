import axios from "axios";

export const registrationAction = (payload) => async (dispatch) => {
  try {
    const data = await axios.post("http://localhost:8080/posts", payload);
    dispatch({
      type: "POST_REGISTRATION_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "POST_REGISTRATION_FAILED",
      payload: "something with wrong",
    });
  }
};

export const loginAction = () => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:8080/posts");
    dispatch({
      type: "POST_REGISTRATION_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "POST_REGISTRATION_FAILED",
      payload: "something with wrong",
    });
  }
};

export const registrationData = () => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:8080/posts");
    dispatch({
      type: "GET_REGISTRATION_DATA_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_REGISTRATION_DATA_FAILED",
      payload: "someting with wrong",
    });
  }
};

export const eventRegistration = (payload) => async (dispatch) => {
  try {
    const data = await axios.post("http://localhost:8081/events", payload);
    dispatch({
      type: "POST_REGISTRATION_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "POST_REGISTRATION_FAILED",
      payload: "something with wrong",
    });
  }
};

//LIST EVENT
export const eventList = () => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:8081/events");
    dispatch({
      type: "LIST_EVENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LIST_EVENT_FAILED",
      payload: "something with wrong",
    });
  }
};

//DELETE EVENT
export const deleteEvent = (id) => async (dispatch) => {
  try {
    const data = await axios.delete(`http://localhost:8081/events/${id}`);
    dispatch({
      type: "DELETE_USER_EVENT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_USER_EVENT_LIST_FAILED",
      payload: "something with wrong",
    });
  }
};

//GET SINGLE USER EVENT
export const eventEditList = (id) => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:8081/events/${id}`);
    dispatch({
      type: "SINGLE_LIST_EVENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "SINGLE_LIST_EVENT_FALIED",
      payload: "something with wrong",
    });
  }
};

export const updateEventList = (user, id) => async (dispatch) => {
  try {
    const data = await axios.put(`http://localhost:8081/events/${id}`, user);
    dispatch({
      type: "UPDATE_LIST_EVENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_LIST_EVENT_FIALED",
      payload: "something with wrong",
    });
  }
};
