import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./registration.css";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction, registrationData } from "../redux/action/action";

const Registration = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const passowrdRegex =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const listRegistrationData = useSelector((state) => state.getRegData);

  const userData = listRegistrationData?.user?.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = userData.find((data) => data.email === email && email);

    if (checkEmail) {
      return alert("Email Id is allready exist");
    }
    if (!password.match(passowrdRegex)) {
      return alert("Please password is not match");
    }

    let payload = {
      email: email,
      username: username,
      password: password,
    };
    dispatch(registrationAction(payload));
    setUserName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    dispatch(registrationData());
  }, []);

  console.log("data", userData);

  return (
    <Container>
      <div className="formElement">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              value={username}
              placeholder="Enter User Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btnSub">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Registration;
