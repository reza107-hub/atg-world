import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CiSearch } from "react-icons/ci";
import './Navbar.css';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/">
          <img
            src="https://i.postimg.cc/qRmrdtd1/image.png"
            alt="Brand Logo"
            style={{ height: "30px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          {/* Search Bar */}
          <div
            className="position-relative me-3"
            style={{ width: "360px", maxWidth: "100%" }}
          >
            <CiSearch
              className="position-absolute text-secondary"
              style={{
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                fontSize: "1.2rem",
              }}
            />
            <Form.Control
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className="rounded-pill ps-5 bg-secondary bg-opacity-10"
            />
          </div>
          <Nav className="me-auto"></Nav>
          {/* Create Account Link */}
          <div className="d-flex align-items-center">
            <span>Create account.</span>
            <Button
              variant="link"
              className="text-primary text-decoration-none hover-underline"
            >
              It’s free!
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
