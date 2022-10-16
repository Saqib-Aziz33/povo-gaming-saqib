import { Container, Row, Col } from "react-bootstrap";

function Tokenomics() {
  return (
    <div className="tokenomics">
      <Container>
        <h1 className="text-center fw-bold fs-1 mb-5">
          Povo <span className="txt-red">Tokenomics</span>
        </h1>
        <Row>
          <Col md={6} className="mb-4">
            <h5
              style={{ color: "#26a0d3" }}
              className="fs-5 text-uppercase fw-bold mb-4"
            >
              total supply: 10,000,000
            </h5>
            <h2 className="fs-2 fw-bold" style={{ color: "#ffc107" }}>
              Token <span style={{ color: "#26a0d3" }}>Distribution</span>{" "}
              <br /> (Gamenomics)
            </h2>
            <>
              <ul className="my-4 stat-list ps-4">
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(23, 108, 165)",
                      padding: "0px 80px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Presale
                  </span>{" "}
                  30%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(255, 193, 7)",
                      padding: "0px 45px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Staking pool
                  </span>{" "}
                  23%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(91, 63, 144)",
                      padding: "0px 30px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Liquidity Pool
                  </span>
                  20%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(200, 30, 80)",
                      padding: "0px 10px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Advisors
                  </span>
                  10%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(235, 56, 116)",
                      padding: "0px 10px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Airdop
                  </span>
                  7%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(47, 172, 206)",
                      padding: "0px 4px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Gaming
                  </span>{" "}
                  7%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(245, 140, 139)",
                      padding: 0,
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Team
                  </span>{" "}
                  3%
                </li>
              </ul>
            </>
          </Col>
          <Col md={6} className="mb-4">
            <img src="assets/tokenchart.png" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Tokenomics;
