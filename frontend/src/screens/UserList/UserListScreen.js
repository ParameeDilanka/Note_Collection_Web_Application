import React, { useEffect } from "react";
import {Button, Accordion, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/ErrorMessage";
import Loader from "../../components/Loading";
import { listUsers, deleteUser } from "../../actions/userActions";
import { BsCheckLg } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import MainScreen from "../../components/MainScreen";
import ("../LoginScreen/LoginScreen.css")

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Confirm")) {
      dispatch(deleteUser(id));
    }
  };


  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="loginContainer">
          
          <MainScreen title="User List">
            {users.map((user) => (
              <Accordion>
                <Card style={{ margin: 10 }} key={user._id}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      // onClick={() => ModelShow(note)}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Toggle
                        as={Card.Text}
                        variant="link"
                        eventKey="0"
                      >
                        {user.email}
                      </Accordion.Toggle>
                    </span>

                    <div>
                      <Button
                        variant="danger"
                        className="mx-2 deleteButton"
                        onClick={() => deleteHandler(user._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <span>First Name: </span>
                        <ReactMarkdown>{user.firstName}</ReactMarkdown>
                        <span>Last Name: </span>
                        <ReactMarkdown>{user.lastName}</ReactMarkdown>
                        <span>Email: </span>
                        <ReactMarkdown>{user.email}</ReactMarkdown>
                        <span>Mobile: </span>
                        <ReactMarkdown>{user.mobile}</ReactMarkdown>
                        <span>Date of Birth: </span>
                        <ReactMarkdown>{user.dob}</ReactMarkdown>
                        <span>Admin Status: </span>
                        {user.isAdmin ? <BsCheckLg /> : <i></i>}
                        <footer className="blockquote-footer">
                          Created on{" "}
                          <cite title="Source Title">
                            {user.createdAt.substring(0, 10)}
                          </cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
          </MainScreen>
        </div>
      )}
    </>
  );
};

export default UserListScreen;
