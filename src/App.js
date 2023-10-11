import { Navbar, Container, NavDropdown, Nav, Row, Col, Image, Card } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import coyateLogo from './assets/images/coyote.jpg';
import top_board from './assets/images/top_board_games.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Board game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
              <Nav.Link href="#security">Login / Sign up</Nav.Link>
            <Nav.Link href="#cart"><FiShoppingCart style={{fontSize: '25px'}} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <main>
    <body>
      <Container>
        <Container fluid className="px-0">
          <Row className="mt-2">
            <Col sm={12}>
            <Image src={top_board} fluid rounded className="boardgame-img--thumb"/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="mt-2">
          <Col sm={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={coyateLogo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="combo-title text-center">
          <h3>Combo board games</h3>
        </div>
        <Row className="mt-2">
          <Col sm={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={coyateLogo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </body>
  </main>
    </div>
  );
}

export default App;
