import { Container, Row, Col } from "react-bootstrap";
import { Box, Text } from "@chakra-ui/react";
import featuresData from "../utils/features.json";
import { SModal } from "./index";

function Features() {
  return (
    <div className="features py-5">
      <Container>
        <h1 className="fs-1 fw bold mb-5 text-center">Povo Features</h1>
        <Row style={{ alignItems: "stretch" }}>
          {featuresData.map((feature, index) => (
            <Col md={6} lg={4} key={index} className="mb-3">
              <Box
                className={`feature-box ${index % 2 === 1 && "bg-red"}`}
                p={8}
                position="relative"
              >
                <img src={feature.img} className="d-block mx-auto" alt="" />
                <h4 className="fs-4 mt-4 txt-red text-center fw-bold">
                  {feature.heading}
                </h4>
                <p className="text-muted mt-2">
                  {feature.text.slice(0, 100)} ...
                </p>
                <Box position="absolute" bottom={0} right={8}>
                  <SModal heading={feature.heading} text={feature.text}>
                    <Text
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                      color="#ffc107FF"
                    >
                      Read more
                    </Text>
                  </SModal>
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Features;
