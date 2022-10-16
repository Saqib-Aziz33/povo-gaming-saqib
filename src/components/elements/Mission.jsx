import { Container, Row, Col } from "react-bootstrap";

const Mission = () => {
  return (
    <div className="mission">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <img
              src="assets/mission.png"
              style={{ maxWidth: "400px", width: "100%" }}
              alt=""
            />
          </Col>
          <Col md={6} className="mb-4">
            <h1 className="fs-1 fw-bold">
              Povo <span className="txt-red">Mission</span>
            </h1>
            <p className="mt-5">
              Povo is a gaming platform that incorporates blockchain technology.
              The platform aims at providing its users with multiple services by
              expanding it horizon to both blockchains and gaming. It aims at
              providing its users with a multi-chain solution, which allows them
              to create their own blockchain solutions. It also allows the game
              players to earn and cash out their rewards without any time limit.
              Moreover, it offers a lower barrierfor entering an advanced
              financial ecosystem, with no deposit and withdrawal limits.
              Lastly, the mission of gPlayer is to provide its users an
              efficient NFT ecosystem for gaming. Where players can literally
              own and control whatever they buy, earn or craft. NFT and gaming
              are the undoubted match made in heaven for the success of a
              specificplatform
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Mission;
