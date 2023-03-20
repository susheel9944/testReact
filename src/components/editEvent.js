import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./registration.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { eventEditList, updateEventList } from "../redux/action/action";

const EditEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventDesc: "",
    price: "",
  });
  const [premiumbook, setPremiumBook] = useState(false);
  const [termcondition, setTermCondition] = useState(false);

  const eventUser = useSelector((state) => state.editEventList);

  const editUserData = eventUser?.user.data;

  console.log("edit user", eventUser?.user.data);

  const handleOnchange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(eventEditList(id));
  }, []);

  useEffect(() => {
    if (editUserData) {
      setEventData({ ...editUserData });
      setPremiumBook({ ...editUserData });
      setTermCondition({ ...editUserData });
    }
  }, [editUserData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      eventName: eventData.eventName,
      eventDate: eventData.eventDate,
      eventDesc: eventData.eventDesc,
      price: eventData.price,
      premiumbook: premiumbook,
      termcondition: termcondition,
    };
    dispatch(updateEventList(payload, id));
    alert("Updated Successfully...");
    navigate("/allevent");
  };

  console.log("edit ++", editUserData);

  return (
    <>
      <Container>
        <div style={{ padding: "5px" }}>Update Item {id}</div>
        <div className="formElement">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} className="mb-3" controlId="formGridName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                name="eventName"
                value={eventData.eventName}
                onChange={handleOnchange}
                placeholder="Enter Event Name"
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                name="eventDate"
                value={eventData.eventDate}
                onChange={handleOnchange}
                placeholder="Enter Event Date"
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3"
              controlId="formGridDescription"
            >
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                type="text"
                name="eventDesc"
                value={eventData.eventDesc}
                onChange={handleOnchange}
                placeholder="Enter Event Description"
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={eventData.price}
                onChange={handleOnchange}
                placeholder="Enter Event Price"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="btnSub">
              Update
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default EditEvent;
