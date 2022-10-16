import { Container, Row, Col } from "react-bootstrap";

const Friends = () => {
  return (
    <div className="friends">
      <h1 className="text-center mb-5 fs-1 fw-bold">
        Friends of <span className="txt-red">Povo</span>
      </h1>
      <Container>
        <Row>
          <Col md={3}>
            <img src="assets/fr1.png" alt="" />
          </Col>
          <Col md={3}>
            <img src="assets/fr2.svg" alt="" />
          </Col>
          <Col md={3}>
            <img src="assets/fr3.png" alt="" />
          </Col>
          <Col md={3}>
            <img src="assets/fr4.png" alt="" />
          </Col>
          <Col md={6}>
            <img src="assets/fr5.png" alt="" />
          </Col>
          <Col md={6}>
            <img src="assets/fr6.png" alt="" />
          </Col>
          <Col md={4}>
            <img src="assets/fr7.png" alt="" />
          </Col>
          <Col md={4}>
            <img src="assets/fr8.png" alt="" />
          </Col>
          <Col md={4}>
            <img src="assets/fr9.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Friends;
