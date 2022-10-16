import { Container, Row, Col } from "react-bootstrap";

const Vision = () => {
  return (
    <div className="vision">
      <Container>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <h1 className="fs-1 fw-bold">
              Povo <span className="txt-red">Vision</span>
            </h1>
            <p className="mt-5">
              The vision of Povo is to provide a profitable gaming platform for
              its users, The platform has tried to combine the essence of
              decentralized finance and gaming to create a brainchild that
              incorporate the feature of both parties. The main agenda behind
              this is to, ‘Pay and Earn’. Gamers can now find the facility of
              utilizing their hobby as a means of generating passive income. It
              has combined the facilities of NFTs, multi-chain blockchain
              solutions, reliable asset transfer, and many other functionalities
              under one umberella.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Vision;
