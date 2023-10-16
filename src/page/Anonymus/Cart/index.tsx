import { HomeLayout } from "../../../components/Layout/HomeLayout";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import topBoardGames from "../../../assets/images/top_board_games.jpg";
import Coyate from "../../../assets/images/coyote.jpg";

export const Cart = () => {
  return (
    <>
      <HomeLayout>
        <main>
          <body>
            <Container>
              <Container fluid className="px-0">
                <Row className="mt-2">
                  <Col sm={12}>
                    <Image
                      src={topBoardGames}
                      fluid
                      rounded
                      className="boardgame-img--thumb"
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
            <Container>
              <Row className="mt-2">
                <Col sm={4}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Coyate} />
                    <Card.Body>
                      <Card.Title>Hello sep</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Coyate} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </body>
        </main>
      </HomeLayout>
    </>
  );
};
