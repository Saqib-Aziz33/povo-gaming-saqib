import { Container, Row, Col } from "react-bootstrap";

function Protected() {
  return (
    <div className="protected">
      <h1 className="fs-1 text-center fw-bold mb-5">
        How <span className="txt-red">Povo</span> is Rugpul protected
      </h1>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <ul>
              <li>
                Povo Presale is going held on UniCrypt which prevents rug-pull
                by offering auto liquidity lock functionality
              </li>
              <li>
                60% of raised funds in presale is locked into liquidity by
                UniCrypt for 266 years
              </li>
              <li>Transaction fee is never above 7% max.</li>
              <li>
                Newly created LP tokens are locked in order to ensure
                transparency.
              </li>
              <li>Smart Contract is audited by CertTik.</li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="assets/why.png"
              className="mx-auto d-block"
              style={{ width: "100%", maxWidth: "400px" }}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Protected;
