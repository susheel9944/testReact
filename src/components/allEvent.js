import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, eventList } from "../redux/action/action";

const Home = () => {
  const dispatch = useDispatch();

  const listeventData = useSelector((state) => state.listevent);
  const listData = listeventData?.user?.data;
  useEffect(() => {
    dispatch(eventList());
  }, []);

  const deleteContact = (id) => {
    dispatch(deleteEvent(id));
    alert("Item Deleted Successfully...");
    dispatch(eventList());
  };
  console.log("all list data", listData);
  return (
    <>
      <Container>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listData?.length > 0 &&
                listData?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.eventName}</td>
                      <td>{item.eventDate}</td>
                      <td>{item.eventDesc}</td>
                      <td>{item.price}</td>

                      <td>
                        <Link to={`/edit-event/${item.id}`}>
                          <Button
                            variant="warning"
                            style={{ marginRight: "20px" }}
                          >
                            Edit
                          </Button>
                        </Link>

                        <Button
                          variant="danger"
                          onClick={() => deleteContact(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};
export default Home;
