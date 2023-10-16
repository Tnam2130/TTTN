import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="App-header">
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Board game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#categories">Products</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#security">Login / Sign up</Nav.Link>
              <Nav.Link href="cart">
                <FiShoppingCart style={{ fontSize: "25px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
