import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import "./Header.css";
import { logout } from "../actions/userActions";


function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar bg="green" expand="lg" style={{ display: "flex", background: "#ADD8E6" }}>
      <Container>
        <Navbar.Brand href="/"><h1>Note Collection</h1></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav>
            {userInfo && userInfo.isAdmin && (
              <>
                <Nav.Link href="/mynotes"><h5>My Notes</h5></Nav.Link>
                <NavDropdown title="Admin" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/admin/userList">
                    <h5>User List</h5>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/register">
                    <h5>Create User</h5>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {userInfo ? (
              <>
                <NavDropdown
                  title={`${userInfo.firstName}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    />
                    <h5>My Profile</h5>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    <h5>Logout</h5>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              
              <Nav.Link href="/login"><h5><i class="fa-solid fa-user"> Login</i></h5></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
