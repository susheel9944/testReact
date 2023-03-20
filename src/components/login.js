import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./registration.css";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, registrationData } from "../redux/action/action";
import { Container } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const listRegistrationData = useSelector((state) => state.getRegData);

  const userData = listRegistrationData?.user?.data;

  const handleLogin = (e) => {
    e.preventDefault();
    const checkEmail = userData.find((data) => data.email === email && email);

    let payload = {
      email: email,
      password: password,
    };
    if (checkEmail) {
      dispatch(loginAction(payload));
      navigate("/allevent");
    } else {
      alert("email is not exist");
    }
  };

  useEffect(() => {
    dispatch(registrationData());
  }, []);

  console.log("data", userData);

  return (
    <Container>
      <div className="formElement">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            onClick={handleLogin}
            variant="primary"
            type="submit"
            className="btnSub"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
