import { Container, Row, Col } from "react-bootstrap";

const Benefit = () => {
  return (
    <div className="benefit">
      <Container>
        <h1 className="text-center fw-bold fs-1 mb-5">Benefit of Povo</h1>
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <h5 className="fs-4">Anyone Who Owns Gaming Assets</h5>
            <ul className="my-4 ps-4" style={{ listStyleType: "square" }}>
              <li className="my-3">Transfer items to another account</li>
              <li className="my-3">
                Renders the items to mount reserve values
              </li>
              <li className="my-3">
                Ease of using the items accross other supported games
              </li>
            </ul>
            <h4 className="fs-4 fw- my-3">
              Game tournament and receive winnings in your wallet
            </h4>
            <h4 className="fs-4 fw- my-3">
              Artificial Intelligence improve players expericne
            </h4>
            <h4 className="fs-4 fw-bold my-3">Withdraw funds using PayPal</h4>
          </Col>
          <Col md={6} className="mb-4">
            <img src="assets/benefit.png" className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Benefit;
