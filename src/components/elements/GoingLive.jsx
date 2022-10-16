import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import SModal from "../utils/SModal";

const GoingLive = () => {
  return (
    <div className="going-live py-5">
      <Container className="text-center">
        <h1 className="fs-1 fw-bold mb-5">
          Platform going <span className="txt-red">Live</span> after PreSale
        </h1>
        <Row className="py-4">
          <Col md={4} className="mb-4">
            <h4 className="fs-2 mb-3 fw-bolder">Frictionless yield</h4>
            <SModal heading="Frictionless yield" text="some dummy text">
              <Button className="txt-red">Read more</Button>
            </SModal>
          </Col>
          <Col md={4} className="mb-4">
            <h4 className="fs-2 mb-3 fw-bolder">Governance in gaming</h4>
            <SModal heading="Governance in gaming" text="some dummy text">
              <Button className="txt-red">Read more</Button>
            </SModal>
          </Col>
          <Col md={4} className="mb-4">
            <h4 className="fs-2 mb-3 fw-bolder">Staking in gaming</h4>
            <SModal heading="Staking in gaming" text="some dummy text">
              <Button className="txt-red">Read more</Button>
            </SModal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default GoingLive;
