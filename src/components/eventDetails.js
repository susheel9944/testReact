import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./registration.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { eventRegistration } from "../redux/action/action";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventDesc: "",
    price: "",
  });
  const [premiumbook, setPremiumBook] = useState(false);
  const [termcondition, setTermCondition] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleOnchange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

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
    dispatch(eventRegistration(payload));
    alert("Event Created Successfully..");
    setEventData("");
    setPremiumBook(false);
    setTermCondition(false);
  };

  return (
    <>
      <Container>
        <div className="formElement">
          <Form onSubmit={handleSubmit}>
            {toggle ? (
              <>
                <div style={{ padding: "10px" }}>
                  Welcome to Premium Booking
                </div>
                <Form.Group as={Col} className="mb-3" controlId="formGridName">
                  <Form.Label>Event Name </Form.Label>
                  <Form.Control
                    type="text"
                    name="eventName"
                    value={eventData.eventName || ""}
                    onChange={handleOnchange}
                    placeholder="Enter Event Name"
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridDate">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="eventDate"
                    value={eventData.eventDate || ""}
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
                    value={eventData.eventDesc || ""}
                    onChange={handleOnchange}
                    placeholder="Enter Event Description"
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={eventData.price || ""}
                    onChange={handleOnchange}
                    placeholder="Enter Event Price"
                  />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group as={Col} className="mb-3" controlId="formGridName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="eventName"
                    value={eventData.eventName || ""}
                    onChange={handleOnchange}
                    placeholder="Enter Event Name"
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridDate">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="eventDate"
                    value={eventData.eventDate || ""}
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
                    value={eventData.eventDesc || ""}
                    onChange={handleOnchange}
                    placeholder="Enter Event Description"
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={eventData.price || ""}
                    onChange={handleOnchange}
                    placeholder="Enter Event Price"
                  />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Premium Booking"
                name="premiumbook"
                value={premiumbook || false}
                onChange={(e) => {
                  setPremiumBook(e.target.checked);
                  setToggle(true);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 " id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                name="agreement"
                value={termcondition || false}
                onChange={(e) => setTermCondition(e.target.checked)}
                label="I accept terms & conditions"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={!termcondition}
              className="btnSub"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default EventDetails;
