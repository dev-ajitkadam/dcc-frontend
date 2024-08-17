import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import dcc1 from "../images/dcc1.png";
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function NavBar() {
  
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleDash = () => {
    if (role === "admin") {
      navigate("/dashboard/admin");
    } else if (role === "manager") {
      navigate("/dashboard/manager");
    } else if (role === "siteeng") {
      navigate("/dashboard/siteeng");
    } else {
      navigate("/dashboard/client");
    }
  };

  if ( !role) {
    return (
      <div className="navbar pt-0">
        <Navbar
          variant="dark"
          expand="lg"
          className="form-control-lg text-black bg-warning shadow-inherit"
          style={{ border: "none", borderRadius: 0 }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className=" flex-fill ">
              <img src={dcc1} height="55px" width="65px" alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-success" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto p-1 flex-fill borders1">
                <Nav.Link as={Link} to="/" className="nav-link text-light cards rounded-5  bg-black  shadow-sm text-center">
                <i class="bi bi-house"></i> Home
                </Nav.Link>
                <Nav.Link as={Link} to="/services" className="nav-link text-dark cards  text-center">
                  Services
                </Nav.Link>
                
                <Nav.Link as={Link} to="/about" className="nav-link text-dark cards bordere text-center">
                  About 
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-link text-dark cards text-bold font-extrabold bordere text-center">
                  Contact Us
                </Nav.Link>
              </Nav>

              <Dropdown className="text-center">
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  Login
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-warning">
                  <Dropdown.Item>
                    <Link to="/login" state={{ role: "client" }} className="text-decoration-none text-black">
                      Client
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/login" state={{ role: "siteeng" }} className="text-decoration-none text-black">
                      Site-Engineer
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/login" state={{ role: "manager" }} className="text-decoration-none text-black">
                      Manager
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/login" state={{ role: "admin" }} className="text-decoration-none text-black">
                      Admin
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div className="navbar p-0">
        <Navbar
          variant="dark"
          expand="lg"
          className="form-control-lg text-black bg-warning mt-0"
          style={{ border: "none", borderRadius: 0 }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="mr-5 px-3 py-2 pb-0 mb-0 flex-fill">
              <img src={dcc1} height="40" width="60px" alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark text-dark" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto p-1 flex-fill" id="navfont">
                <Nav.Link as={Link} to="/" className="nav-link text-dark cards font-extrabold">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/services" className="nav-link text-dark cards">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav-link text-dark cards">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-link text-dark cards text-bold font-extrabold">
                  Contact Us
                </Nav.Link>
              </Nav>

              <button className="btn btn-danger" onClick={handleDash}>
                Go To Dashboard
              </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
